export class Input extends HTMLElement {
  static get observedAttributes() {
    return ['label']
  }

  /**
   * @param {string} text
   */
  set label(text) {
    const span = this.shadowRoot?.querySelector('span')
    if (span) span.textContent = text
  }

  /**
   * @param {'label'} name
   * @param {string | null} _oldValue
   * @param {string | null} newValue
   */
  attributeChangedCallback(name, _oldValue, newValue) {
    this[name] = newValue || ''
  }
}
