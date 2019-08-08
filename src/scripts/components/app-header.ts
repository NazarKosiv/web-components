const tmpl = document.createElement('template');
tmpl.innerHTML = `
    <style>
        :host {
            .title {
                color: red;
            }
        }
    </style>
    <header class="header">
        <h1 class="title"></h1>
    </header>
`;

export default class AppHeader extends HTMLElement {
    private _title: string = 'Default Title';
    public set title(title: string) {
        this._title = title;
    }
    public get title(): string {
        return this._title;
    }

    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }

    public static get observedAttributes(): string[] {
        return ['title']
    }

    public connectedCallback(): void {
        this.changeTitle();
    }

    public attributeChangedCallback(attrName: string, oldVal: any, newVal: any): void {
        if (attrName === AppHeader.observedAttributes[0]) {
            this.handleTitleChange(oldVal, newVal);
        }
    }

    private handleTitleChange(oldTitle: string, newTitle: string): void {
        if (oldTitle !== newTitle) {
            this.title = newTitle;
            this.changeTitle();
        }
    }

    private changeTitle(): void {
        this.shadowRoot.querySelector('h1.title').innerHTML = this.title;
    }
}
