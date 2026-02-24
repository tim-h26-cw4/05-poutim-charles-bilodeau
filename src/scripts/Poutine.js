export default class Poutine {
  constructor(element) {
    console.log('#3 - new Poutine');
    this.element = element;
    this.types = this.element.querySelector('.js-type');
    this.selectedType = '';
    this.init();
  }

  init() {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.addEventListener('click', this.selectedType.bind(this));
    }
  }

  selectedType() {
    const btntypes = document.querySelectorAll('.js-type');
    for (let i = 0; i < btntypes.length; i++) {
      const btntype = btntypes[i];
      btntype.classList.remove('is-active');
      btntype.classList.add('is-active');
    }
    this.selectedType = this.element.innerText;
    this.uptatedPhoto();
  }

  uptatedPhoto() {
    const image = document.querySelector('img');
    image.classList.add('is-active');
  }
}
