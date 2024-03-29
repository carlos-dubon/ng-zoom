<h1 align="center">ng-zoom 🔍️</h1>

<p align="center" style="font-size: 1.2rem">
  Image zoom directive for Angular based apps.
</p>

<div align="center">
  <video
    src="https://user-images.githubusercontent.com/69093659/183260253-305a1e18-6f37-4206-bdbb-22395b303e23.mp4"
    autoplay
    loop
  ></video>
</div>

<div align="center">
  <a
    href="https://stackblitz.com/edit/angular-ivy-vgauuz?file=src%2Fapp%2Fapp.component.ts"
  >
    <b style="font-size: 1.2rem">StackBlitz Demo</b>
  </a>
</div>

<hr />

<img
  src="https://img.shields.io/github/stars/carlos-dubon/ng-zoom?style=flat-square"
  alt="Stars"
/>
<img
  src="https://img.shields.io/github/forks/carlos-dubon/ng-zoom?style=flat-square"
  alt="Forks"
/>
<img
  src="https://img.shields.io/github/issues/carlos-dubon/ng-zoom?style=flat-square"
  alt="Issues"
/>
<img
  src="https://img.shields.io/npm/dt/ng-zoom?style=flat-square"
  alt="NPM downloads"
/>
<img
  src="https://img.shields.io/github/license/carlos-dubon/ng-zoom?style=flat-square"
  alt="License"
/>

## ✨ Features

- 👌 Zero-dependency
- 🧬 Perfect for dynamic content, mutation-agnostic — you can do whatever you want with images, it'll work
- ⚡️ Blazing fast — no matter if it's 10 images or 10,000
- 🤓 Powered by quirky math to precisely calculate everything and do the trick with only one transformation
- 🍦 Zero-configuration by default but extensible when you need it
- 🗿 Works flawlessly even on iOS Safari, in every orientation, with every image no matter the size and dimensions

## 🔑 License

[MIT](./LICENSE)

## 🖥 Environment Support

- Angular `^13.0.0`

## 📦 Installation

```
$ npm install ng-zoom
```

## 🔨 Usage

Import the ng-zoom module into the `app.module.ts` file.

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

## ⚙️ Configuration

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

## 🏷️ Config reference

| Property        | Type      | Default | Description                                                                           |
| --------------- | --------- | ------- | ------------------------------------------------------------------------------------- |
| backgroundColor | `string`  | #ffffff | The background color of the wrapper element.                                          |
| scaleUp         | `boolean` | true    | Defines if an element should be scaled up when zooming or maintain its original size. |
| padding         | `number`  | 20      | Padding in pixels                                                                     |
| duration        | `number`  | 300     | The duration of the zoom animation in milliseconds.                                   |
