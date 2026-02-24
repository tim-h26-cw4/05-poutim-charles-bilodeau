import Chef from './Chef.js';
import Icons from './utils/Icons.js';

// La ligne suivante devrait être au TOUT début du init() du Main
Icons.load();

class Main {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    const chefs = document.querySelectorAll('[data-component="Chef"]');

    for (let i = 0; i < chefs.length; i++) {
      const chef = chefs[i];
      new Chef(chef);
    }
  }
}

new Main();
