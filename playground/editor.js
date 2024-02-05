import CantoTool from '../src/index.js';
import EditorJS from '@editorjs/editorjs';

new EditorJS({
  autofocus: true,
  tools: {
    canto: {
      class: CantoTool,
      config: {
        endpoint: 'http://localhost:8008/canto_url',
      },
    },
  },
});
