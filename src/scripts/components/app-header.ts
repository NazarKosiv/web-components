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

        :host([mobile]) .header {
            text-transform: uppercase;
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
        return ['title', 'mobile']
    }

    public attributeChangedCallback(attrName: string, oldVal: any, newVal: any): void {
        switch(attrName) {
            case AppHeader.observedAttributes[0]:
                this.handleTitleChange(oldVal, newVal);
                break;

            case AppHeader.observedAttributes[1]:
                this.handleTitleColorChange(oldVal, newVal);
                break;
        }
    }

    private handleTitleChange(oldTitle: string, newTitle: string): void {
        if (oldTitle !== newTitle) {
            this.changeTitle();
        }
    }

    private handleTitleColorChange(oldVal: string, newVal: string) {
    }

    private changeTitle(): void {
        this.shadowRoot.querySelector('h1.title').innerHTML = this.title;
    }
}
