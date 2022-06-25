# ng-zoom

> 🔍️ Image zoom directive for Angular based apps.

<p align="center">
  <img src=".github/readme/demo.gif" alt="demo" />
</p>

<p align="center">
<a href="https://stackblitz.com/edit/angular-ivy-714775?file=src%2Fapp%2Fapp.module.ts" target="_blank">Example app</a>
</p>

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

Pass a `NgZoomConfig` object to the module's `forRoot` method.

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

#### Options:

| Property        | Type    | Default | Description                                                                           |
| --------------- | ------- | ------- | ------------------------------------------------------------------------------------- |
| backgroundColor | string  | #ffffff | The background color of the wrapper element.                                          |
| scaleUp         | boolean | true    | Defines if an element should be scaled up when zooming or maintain its original size. |
| padding         | number  | 20      | Padding in pixels                                                                     |
| duration        | number  | 300     | The duration of the zoom animation in milliseconds.                                   |
