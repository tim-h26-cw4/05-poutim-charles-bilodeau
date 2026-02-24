export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.js-type');
    this.selectedType = '';
    this.init();
  }

  init() {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(event) {
    for (let i = 0; i < this.types.length; i++) {
      const btntype = this.types[i];
      btntype.classList.remove('is-active');
    }
    const bouton = event.currentTarget;
    bouton.classList.add('is-active');
    this.selectedType = bouton.innerText;
    this.uptatedPhoto();
  }

  uptatedPhoto() {
    const image = this.element.querySelector('.poutine__image');

    image.classList.add('is-active');
    image.src = `assets/images/${this.selectedType}.png`;
  }
}
