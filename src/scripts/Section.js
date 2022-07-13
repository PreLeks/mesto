export default class Section {
    constructor({ cards, render }, containerSelector) {
        this._cards = cards;
        this._render = render;
        this._containerSelector = containerSelector;
        this._container = document.querySelector(`.${this._containerSelector}`);
    }

    addCard({ name, link }) {
        this._container.prepend(this._render({ name, link }));
    }

    renderAll() {
        this._cards.forEach(({ name, link }) => {
            this.addCard({ name, link });
        });
    }
}