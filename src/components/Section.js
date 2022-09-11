export default class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._containerSelector = containerSelector;
        this._container = document.querySelector(this._containerSelector);
    }

    addItem(item) {
        this._container.prepend(item);
    }

    rendererItems(items) {
        items.forEach(item => this._renderer(item));
    }
}