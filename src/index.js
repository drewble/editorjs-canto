/**
 * @typedef {object} CantoToolData
 * @description Canto Tool's input and output data format
 * @property {string} contentId — canto content id
 * @property {string} src - image URL
 * @property {string} title - image title
 * @property {string} alt - image content description
 * @property {string} caption - editorial for image
 * @property {string} credit - attribution for image
 * @property {string} height - height of image in px
 * @property {string} width - width of image in px
 */

/**
 * @typedef {object} CantoToolConfig
 * @property {string} endpoint - the endpoint for canto data fetching
 * @property {object} headers - the headers used in the GET request
 */

import './index.css';
import 'url-polyfill';
import ajax from '@codexteam/ajax';
import { IconPicture } from '@codexteam/icons';

/**
 * @typedef {object} UploadResponseFormat
 * @description This format expected from backend on canto data fetching
 * @property {number} success  - 1 for successful uploading, 0 for failure
 * @property {metaData} meta - Object with canto data.
 *
 * Tool may have any data provided by backend, currently are supported by design:
 * title, description, image, url
 */
export default class CantoTool {
  /**
   * Notify core that read-only mode supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return true;
  }

  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: IconPicture,
      title: 'Canto',
    };
  }

  /**
   * Allow to press Enter inside the CantoTool input
   *
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return true;
  }

  /**
   * @param {object} options - Tool constructor options fot from Editor.js
   * @param {CantoToolData} options.data - previously saved data
   * @param {CantoToolConfig} options.config - user config for Tool
   * @param {object} options.api - Editor.js API
   * @param {boolean} options.readOnly - read-only mode flag
   */
  constructor({ data, config, api, readOnly }) {
    this.api = api;
    this.readOnly = readOnly;

    /**
     * Tool's initial config
     */
    this.config = {
      endpoint: config.endpoint || '',
      headers: config.headers || {},
    };

    this.nodes = {
      wrapper: null,
      container: null,
      progress: null,
      input: null,
      inputHolder: null,
      cantoContentId: null,
      cantoSrc: null,
      cantoTitle: null,
      cantoAlt: null,
      cantoAltLabel: null,
      cantoCaption: null,
      cantoCaptionLabel: null,
    };

    this._data = {
      contentId: '',
      src: '',
      title: '',
      alt: '',
      credit: '',
      caption: '',
      height: '',
      width: '',
    };

    this.data = data;
  }

  /**
   * Renders Block content
   *
   * @public
   *
   * @returns {HTMLDivElement}
   */
  render() {
    this.nodes.wrapper = this.make('div', this.CSS.baseClass);
    this.nodes.container = this.make('div', this.CSS.container);

    this.nodes.inputHolder = this.makeInputHolder();
    this.nodes.cantoContent = this.prepareCantoPreview();

    /**
     * If Tool already has data, render canto preview, otherwise insert input
     */
    if (this.data?.src?.length) {
      this.nodes.container.appendChild(this.nodes.cantoContent);
      this.showCantoPreview(this.data);
    } else {
      this.nodes.container.appendChild(this.nodes.inputHolder);
    }

    this.nodes.wrapper.appendChild(this.nodes.container);

    return this.nodes.wrapper;
  }

  /**
   * Return Block data
   *
   * @public
   *
   * @returns {CantoToolData}
   */
  save() {
    return this.data;
  }

  /**
   * Validate Block data
   * - check if given contentId is an empty string or not.
   *
   * @public
   *
   * @returns {boolean} false if saved data is incorrect, otherwise true
   */
  validate() {
    return this.data.contentId.trim() !== '';
  }

  /**
   * Stores all Tool's data
   *
   * @param {CantoToolData} data - data to store
   */
  set data(data) {
    this._data = Object.assign({}, {
      contentId: data.contentId || this._data.contentId,
      src: data.src || this._data.src,
      title: data.title || this._data.title,
      alt: data.alt || this._data.alt,
      caption: data.caption || this._data.caption,
      credit: data.credit || this._data.credit,
      height: data.height || this._data.height,
      width: data.width || this._data.width
    });
  }

  /**
   * Return Tool data
   *
   * @returns {CantoToolData}
   */
  get data() {
    return this._data;
  }

  /**
   * @returns {object} - Canto Tool styles
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      input: this.api.styles.input,

      /**
       * Tool's classes
       */
      container: 'canto-tool',
      inputEl: 'canto-tool__input',
      inputHolder: 'canto-tool__input-holder',
      inputError: 'canto-tool__input-holder--error',
      inputLabel: 'canto-tool__label',
      cantoContent: 'canto-tool__content',
      cantoContentRendered: 'canto-tool__content--rendered',
      cantoSrc: 'canto-tool__src',
      cantoTitle: 'canto-tool__title',
      cantoAlt: 'canto-tool__alt',
      cantoCaption: 'canto-tool__caption',
      cantoContentId: 'canto-tool__id',
      progress: 'canto-tool__progress',
      progressLoading: 'canto-tool__progress--loading',
      progressLoaded: 'canto-tool__progress--loaded',
    };
  }

  /**
   * Prepare input holder
   *
   * @returns {HTMLElement}
   */
  makeInputHolder() {
    const inputHolder = this.make('div', this.CSS.inputHolder);

    this.nodes.progress = this.make('label', this.CSS.progress);
    this.nodes.input = this.make('div', [this.CSS.input, this.CSS.inputEl], {
      contentEditable: !this.readOnly,
    });

    this.nodes.input.dataset.placeholder = this.api.i18n.t('Canto');

    if (!this.readOnly) {
      this.nodes.input.addEventListener('paste', (event) => {
        this.startFetching(event);
      });

      this.nodes.input.addEventListener('keydown', (event) => {
        const [ENTER, A] = [13, 65];
        const cmdPressed = event.ctrlKey || event.metaKey;

        switch (event.keyCode) {
          case ENTER:
            event.preventDefault();
            event.stopPropagation();

            this.startFetching(event);
            break;
          case A:
            if (cmdPressed) {
              this.selectCantoId(event);
            }
            break;
        }
      });
    }

    inputHolder.appendChild(this.nodes.progress);
    inputHolder.appendChild(this.nodes.input);

    return inputHolder;
  }

  /**
   * Activates Canto data fetching by url
   *
   * @param {PasteEvent|KeyboardEvent} event - fetching could be fired by a pase or keydown events
   */
  startFetching(event) {
    let url = this.nodes.input.textContent;

    if (event.type === 'paste') {
      url = (event.clipboardData || window.clipboardData).getData('text');
    }

    this.removeErrorStyle();
    this.fetchCantoData(url);
  }

  /**
   * If previous Canto data fetching failed, remove error styles
   */
  removeErrorStyle() {
    this.nodes.inputHolder.classList.remove(this.CSS.inputError);
    this.nodes.inputHolder.insertBefore(this.nodes.progress, this.nodes.input);
  }

  /**
   * Select CantoTool input content by CMD+A
   *
   * @param {KeyboardEvent} event - keydown
   */
  selectCantoId(event) {
    event.preventDefault();
    event.stopPropagation();

    const selection = window.getSelection();
    const range = new Range();

    const currentNode = selection.anchorNode.parentNode;
    const currentItem = currentNode.closest(`.${this.CSS.inputHolder}`);
    const inputElement = currentItem.querySelector(`.${this.CSS.inputEl}`);

    range.selectNodeContents(inputElement);

    selection.removeAllRanges();
    selection.addRange(range);
  }

  /**
   * Prepare canto preview holder
   *
   * @returns {HTMLElement}
   */
  prepareCantoPreview() {
    const holder = this.make('div', this.CSS.cantoContent);

    this.nodes.cantoContentId = this.make('div', this.CSS.cantoContentId);
    this.nodes.cantoSrc = this.make('img', this.CSS.cantoSrc);
    this.nodes.cantoTitle = this.make('div', this.CSS.cantoTitle);
    this.nodes.cantoCaption = this.make('textarea', this.CSS.cantoCaption, {
      rows: 5,
    });
    this.nodes.cantoAlt = this.make('textarea', this.CSS.cantoAlt, {
      rows: 2,
    });

    return holder;
  }
 
  /**
   * Compose Canto preview from fetched data
   *
   * @param {metaData} meta - canto meta data
   */
  showCantoPreview({ src, title, caption = '', alt = '' }) {
    this.nodes.container.appendChild(this.nodes.cantoContent);

    if (src) {
      this.nodes.cantoSrc.src = src;
      this.nodes.cantoContent.appendChild(this.nodes.cantoSrc);
    

      this.nodes.cantoAltLabel = this.make('span', this.CSS.inputLabel);
      this.nodes.cantoAltLabel.textContent = 'Alt Text:';
      this.nodes.cantoContent.appendChild(this.nodes.cantoAltLabel);

      this.nodes.cantoAlt.textContent = alt;
      this.nodes.cantoContent.appendChild(this.nodes.cantoAlt);

      this.nodes.cantoCaptionLabel = this.make('span', this.CSS.inputLabel);
      this.nodes.cantoCaptionLabel.textContent = 'Caption:';
      this.nodes.cantoContent.appendChild(this.nodes.cantoCaptionLabel);

      this.nodes.cantoCaption.textContent = caption;
      this.nodes.cantoContent.appendChild(this.nodes.cantoCaption);
    }

    this.nodes.cantoContent.classList.add(this.CSS.cantoContentRendered);
    this.nodes.cantoContent.setAttribute('href', this.data.src);
    this.nodes.cantoContent.appendChild(this.nodes.cantoContentId);
  }

  /**
   * Show loading progress bar
   */
  showProgress() {
    this.nodes.progress.classList.add(this.CSS.progressLoading);
  }

  /**
   * Hide loading progress bar
   *
   * @returns {Promise<void>}
   */
  hideProgress() {
    return new Promise((resolve) => {
      this.nodes.progress.classList.remove(this.CSS.progressLoading);
      this.nodes.progress.classList.add(this.CSS.progressLoaded);

      setTimeout(resolve, 500);
    });
  }

  /**
   * If data fetching failed, set input error style
   */
  applyErrorStyle() {
    this.nodes.inputHolder.classList.add(this.CSS.inputError);
    this.nodes.progress.remove();
  }

  /**
   * Sends to backend pasted url and receives canto data
   *
   * @param {string} contentId - canto content ID
   */
  async fetchCantoData(contentId) {
    this.showProgress();
    this.data = { contentId: contentId };

    try {
      const { body } = await (ajax.get({
        url: this.config.endpoint,
        headers: this.config.headers,
        data: {
          contentId,
        },
      }));

      this.onFetch(body);
    } catch (error) {
      this.fetchingFailed(this.api.i18n.t('Couldn\'t fetch the canto data'));
    }
  }

  /**
   * Canto data fetching callback
   *
   * @param {UploadResponseFormat} response - backend response
   */
  onFetch(response) {
    if (!response || !response.success) {
      this.fetchingFailed(this.api.i18n.t('Couldn\'t get this canto data, try the other one'));

      return;
    }

    const metaData = response.meta

    const { src, title, alt, caption, credit, height, width } = metaData

    const contentId = this.data.contentId;

    this.data = {
      contentId,
      src,
      title,
      alt,
      caption,
      credit,
      height,
      width,
    };

    if (!metaData) {
      this.fetchingFailed(this.api.i18n.t('Wrong response format from the server'));

      return;
    }

    console.log(metaData);

    this.hideProgress().then(() => {
      this.nodes.inputHolder.remove();
      this.showCantoPreview({src, title, caption, alt});
    });
  }

  /**
   * Handle canto fetching errors
   *
   * @private
   *
   * @param {string} errorMessage - message to explain user what he should do
   */
  fetchingFailed(errorMessage) {
    this.api.notifier.show({
      message: errorMessage,
      style: 'error',
    });

    this.applyErrorStyle();
  }

  /**
   * Helper method for elements creation
   *
   * @param {string} tagName - name of creating element
   * @param {string|string[]} [classNames] - list of CSS classes to add
   * @param {object} [attributes] - object with attributes to add
   * @returns {HTMLElement}
   */
  make(tagName, classNames = null, attributes = {}) {
    const el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (const attrName in attributes) {
      el[attrName] = attributes[attrName];
    }

    return el;
  }
}
