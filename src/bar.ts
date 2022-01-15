export class Input extends HTMLElement {
  static get observedAttributes() {
    return ['label']
  }

  set label(text: string) {
    const span = this.shadowRoot?.querySelector('span')
    if (span) span.textContent = text
  }

  attributeChangedCallback(name: 'label', _oldValue: string | null, newValue: string | null) {
    this[name] = newValue || ''
  }
}
