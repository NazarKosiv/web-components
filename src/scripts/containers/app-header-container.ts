import CustomComponent from "../shared/components/custom-component";
import { takeUntil } from "rxjs/operators";
import AppHeader from "../components/app-header";

const tmplInnerHtml = `
    <app-header></app-header>
`;

export default class AppHeaderContainer extends CustomComponent {
    private appHeader: AppHeader;

    constructor() {
        super(tmplInnerHtml);
    }

    public connectedCallback(): void {
        this.appHeader = this.shadowRoot.querySelector('app-header') as AppHeader;

        this.store.title$
            .pipe(
                takeUntil(this.onDestroy$)
            )
            .subscribe((title: string) => {
                this.appHeader.setAttribute('title', title);
            })

        this.store.isMobile$
            .pipe(
                takeUntil(this.onDestroy$)
            )
            .subscribe((isMobile: boolean) => {
                if (isMobile) {
                    this.appHeader.setAttribute('mobile', 'mobile');
                } else {
                    this.appHeader.removeAttribute('mobile');
                }
            })
    }
}
