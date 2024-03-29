import { LitElement, html } from 'lit-element';

class UpdateProperties extends LitElement {
  static get properties(){
    return {
      message: String
    }
  }
  constructor() {
    super();
    this.message = 'loading';
    this.addEventListener('stuff-loaded', (e) => { this.message = e.detail });
    this.loadStuff();
  }
  render(){
    return html`
      <p>${this.message}</p>
    `;
  }
  loadStuff(){
    setInterval(() => {
      let loaded = new CustomEvent('stuff-loaded', {
        detail: 'Loading complete.'
      });
      this.dispatchEvent(loaded);
    }, 3000);
  }
}

customElements.define('update-properties', UpdateProperties);