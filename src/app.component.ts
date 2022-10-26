import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import './contact-list.component';
import './task-list.component';
import './app.component.scss';
import template from './app.component.html';

@customElement('app-component')
export class AppComponent extends LitElement {
    
    protected override createRenderRoot(): Element | ShadowRoot {
        return this;
    }

    render() {
        return html`${unsafeHTML(template)}`;
    }

}