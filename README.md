# ng-zoom

> 🔍️ Image zoom directive for Angular based apps.

## ✨ Features

- 👌 Zero-dependency
- 🧬 Perfect for dynamic content, mutation-agnostic — you can do whatever you want with images, it'll work
- ⚡️ Blazing fast — no matter if it's 10 images or 10,000
- 🤓 Powered by quirky math to precisely calculate everything and do the trick with only one transformation
- 🍦 Zero-configuration by default but extensible when you need it
- 🗿 Works flawlessly even on iOS Safari, in every orientation, with every image no matter the size and dimensions

## ☀️ License

[MIT](./LICENSE)

## 🖥 Environment Support

- Angular `^13.0.0`

## 📦 Installation

```
$ npm install ng-zoom
```

## 🔨 Usage

Import the ng-zoom module into your `app.module.ts` file.

```TypeScript
import { NgZoomModule } from 'ng-zoom';

@NgModule({
  imports: [NgZoomModule],
})
export class AppModule {}
```

Use the `ng-zoom` directive in your `.html` files.

```HTML
<img ng-zoom src="lake.png" alt="lake" />
```

## 🧰 Configuration

Pass a `NgZoomConfig` object to the module `forRoot` method.

```TypeScript
import { NgZoomConfig, NgZoomModule } from 'ng-zoom';

const config: NgZoomConfig = {
  backgroundColor: 'skyblue',
};

@NgModule({
  imports: [NgZoomModule.forRoot(config)],
})
export class AppModule {}
```

`NgZoomConfig` interface:

| Property        | Description                                                                           | Type    | Default |
| --------------- | ------------------------------------------------------------------------------------- | ------- | ------- |
| backgroundColor | The background color of the wrapper element.                                          | string  | #ffffff |
| scaleUp         | Defines if an element should be scaled up when zooming or maintain its original size. | boolean | true    |
| padding         | Padding in pixels                                                                     | number  | 20      |
| duration        | The duration of the zoom animation in milliseconds.                                   | number  | 300     |
