import CustomComponent from "../shared/components/custom-component";

const tmplInnerHtml = `
    <style>
        .header {
            display: flex;
            justify-content: center;
        }

        .title {
            color: red;
        }
    </style>
    <header class="header">
        <h1 class="title"></h1>
    </header>
`;

export default class AppHeader extends CustomComponent {
    constructor() {
        super(tmplInnerHtml);
    }

    public static get observedAttributes(): string[] {
        return ['title']
    }

    public attributeChangedCallback(attrName: string, oldVal: any, newVal: any): void {
        if (attrName === AppHeader.observedAttributes[0]) {
            this.handleTitleChange(oldVal, newVal);
        }
    }

    private handleTitleChange(oldTitle: string, newTitle: string): void {
        if (oldTitle !== newTitle) {
            this.changeTitle();
        }
    }

    private changeTitle(): void {
        this.shadowRoot.querySelector('h1.title').innerHTML = this.title;
    }
}
