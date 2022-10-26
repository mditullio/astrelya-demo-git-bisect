import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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