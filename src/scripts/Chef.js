import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    console.log('#1 - new Chef');
    this.element = element;
    this.menu = [];
    this.container = document.querySelectorAll('.js-button-secondary');

    this.init();
  }

  init() {
    const poutines = document.querySelectorAll('.js-poutine');

    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
    }

    const btnCommande = this.element.querySelector('.js-button-secondary');
    btnCommande.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {
    this.container.innerHTML = '';

    let totalPoutine = 0;

    for (let i = 0; i < this.menu.length; i++) {
      const poutine = this.menu[i];
      if (poutine.selectedType !== '') {
        total++;
      }
    }
    const p = document.createElement('p');
    p.innerText = `Nombre de poutine(s) : ${totalPoutine}`;
    this.container.appendChild(p);
  }
}
