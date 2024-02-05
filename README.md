![](https://badgen.net/badge/Editor.js/v2.0/blue)

# Canto Tool

Canto Block for the [Editor.js](https://codex.so/editor). Based on [@editorjs/link](https://github.com/editor-js/link).

![](assets/gif/demo.gif)

## Features

Allows embedding and previewing images from the Canto DAM.

**Note:** this Tool requires server-side implementation for Canto data fetching. See [backend response format](#server-format) for more details.

## Installation

Get the package

```shell
yarn add @drewble/editorjs-canto
```

Include module at your application

```javascript
import CantoTool from "@drewble/editorjs-canto";
```

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
const editor = EditorJS({
  ...

  tools: {
    ...
    canto: {
      class: CantoTool,
      config: {
        endpoint: 'http://localhost:8008/canto_url', // Your backend endpoint for url data fetching,
      }
    }
  },

  ...
});
```

## Config Params

Canto Tool supports these configuration parameters:

| Field    | Type     | Description                                         |
| -------- | -------- | --------------------------------------------------- |
| endpoint | `string` | **Required:** the endpoint for canto data fetching. |
| headers  | `object` | **Optional:** the headers used in the GET request.  |

## Output data

This Tool returns `data` with following format

| Field | Type     | Description                                                                                                                            |
| ----- | -------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| image | `string` | Specified image's url                                                                                                                  |
| meta  | `object` | Fetched image's data. Any data got from the backend. Currently, the plugin's design supports the 'title', 'alt', and 'caption' fields. |

```json
{
  "type": "CantoTool",
  "data": {
    "link": "https://codex.so",
    "meta": {
      "title": "GettyImages1240804.jpg",
      "contentId": "bth1238oicnkjnds8090",
      "alt": "A child in a helmet riding a bicycle on asphalt. The sun is shining. The asphalt is bordered by grass.",
      "caption": "Miller park is a great place for children to enjoy the warm weather.",
      "src": "https://cdn.io/path/to/image/GettyImages1230804.jpg"
    }
  }
}
```

## Backend response format <a name="server-format"></a>

You can implement a backend for canto data fetching your own way. It is a specific and trivial task depending on your
environment and stack.

Backend response **should** cover following format:

```json5
{
  success: 1,
  meta: {
    // ... any fields you want
  },
}
```

**success** — uploading status. 1 for successful, 0 for failed

**link** - Optional response parameter to override the URL provided

**meta** — Canto image data.

Currently, the plugin's design supports the 'title', 'contentId', 'alt', 'src', and 'caption' fields. They should have the following format in the response:

```json5
{
  success: 1,
  meta: {
    title: "GettyImages1240804.jpg",
    contentId: "bth1238oicnkjnds8090",
    alt: "A child in a helmet riding a bicycle on asphalt. The sun is shining. The asphalt is bordered by grass.",
    caption: "Miller park is a great place for children to enjoy the warm weather.",
    src: "https://cdn.io/path/to/image/GettyImages1230804.jpg",
  },
}
```

## Local Development

Run `node dev/server.js` to start the dev backend.

- The response is currently hardcoded. It is possible to fetch real data from Canto using your account's access
  token, but for preview purposes there is no material difference between a hardcoded and live response.

Run `yarn dev` to start frontend dev server. Start the backend _first_.

`vite` will watch your project for changes and reload.

Visit [http://127.0.0.1:5173/playground](http://127.0.0.1:5173/playground) to interact with the EditorJS instance with the Canto plugin configured.
