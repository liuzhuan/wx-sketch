class Sketch {
    constructor(canvasId) {
        this.cid = canvasId;
        this.ctx = wx.createCanvasContext(canvasId);
    }

    /** draw canvas */
    draw(datas) {
        console.log('draw with datas:', datas);
    }

    save() {
        console.log('save into tempfile');
    }

    toString() {
        return `[Sketch cid:${this.cid}]`
    }
}

export default Sketch;
