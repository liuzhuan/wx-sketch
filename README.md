# wx-sketch

`wx-sketch` 是一个基于微信小程序的前端绘制工具。利用它可用绘制图形，绘制图像，并提供了保存至相册的功能。

## 快速入门

在 wxml 文件中创建 canvas 元素，设置 `canvas-id` 属性和 `class` 属性。`canvas-id` 用于 js 调用，`class` 用于设定画布宽高。

```html
<canvas canvas-id="foobar" class="my-canvas"></canvas>
```

在 wxss 中设定画布尺寸：

```css
.my-canvas {
    width: 550px;
    height: 400px;
    border: 1px solid red;
}
```

将 `dist/wx-sketch.js` 拷贝到本地文件夹，然后引入：

```js
import Sketch from './wx-sketch.js'

const sketch = new Sketch('foobar')

const datas = [
    { type: 'rect', x: 0, y: 0, width: 100, height: 100, color: 'white'  },
    { type: 'image', x: 10, y: 10, width: 80, height: 80, src: './a.jpg' }
]

sketch.draw(datas)

/** 保存到相册 */
sketch.save()
```