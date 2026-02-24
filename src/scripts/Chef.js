import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    console.log('#1 - new Chef');
    this.element = element;
    this.menu = [];
    this.container = document.querySelectorAll('js-button-secondary');

    this.init();
  }

  init() {
    const poutines = document.querySelectorAll('js-poutine');

    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(perso);
      this.poutine.push(instance);
    }

    const btnCommande = this.element.querySelectorAll('.js-button-secondary');
    //btnCommande.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {}
}
