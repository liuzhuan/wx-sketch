import Sketch from '../../wx-sketch.js'

Page({
  onLoad
})

function onLoad(options) {
  const sketch = new Sketch('foobar')
  console.log(sketch)
  sketch.draw([])
  sketch.save()
}