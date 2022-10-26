import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Contact } from './Contact';
import './contact-list.component.scss';

@customElement('contact-list')
export class ContactListComponent extends LitElement {
    
    protected override createRenderRoot(): Element | ShadowRoot {
        return this;
    }

    @property()
    contacts: Contact[] = [
        { name: 'John Doe', email: 'john.doe@astrelya.com' },
        { name: 'Marco Rossi', email: 'marco.rossi@astrelya.com', phone: '+41 77 1234567'},
        { name: 'Mohammed Ali', email: 'mohammed.ali@astrelya.com', phone: '+33 450 999 777'}
    ]

    renderContact(contact: Contact) {
        return html`
            <li>
                <div>${contact.name} &lt;${contact.email}&gt;</div> 
                <div>Phone: ${ contact.phone ?? "N/A" }</div>
            </li>
        `
    }

    render() {
        return html`
            <ul>
                ${this.contacts.map(this.renderContact)}
            </ul>
        `
    }

}