import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './task-list.component.scss';

@customElement('task-list')
export class TaskListComponent extends LitElement {
    
    protected override createRenderRoot(): Element | ShadowRoot {
        return this;
    }

    render() {
        return html`
            <div>Work in progress ...</div>
        `
    }

}