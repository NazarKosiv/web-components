import CustomComponent from "../shared/components/custom-component";
import { fromEvent } from "rxjs";
import { takeUntil, filter, map, tap } from 'rxjs/operators';

const tmplInnerHtml = `
    <form id="title-form">
        <label for="title">Title</label>
        <input id="title" type="text" name="title" placeholder="change the title..."/>
        <label for="mobile">is mobile</label>
        <input id="mobile" type="checkbox" name="mobile"/>
        <input id="submit" type="submit" value="Submit"/>
    </form>
`;

export default class AppForm extends CustomComponent {
    private titleInput: HTMLInputElement;
    private titleForm: HTMLFormElement;
    private isMobile: HTMLInputElement;

    constructor() {
        super(tmplInnerHtml);
    }

    public connectedCallback(): void {
        this.titleForm = this.shadowRoot.querySelector('#title-form');
        this.titleInput = this.shadowRoot.querySelector('#title');
        this.isMobile = this.shadowRoot.querySelector('#mobile');

        this.isMobile.checked = this.store.isMobile;

        fromEvent(this.titleForm, 'submit')
            .pipe(
                tap((event) => event.preventDefault()),
                filter(() => this.titleInput.value !== ''),
                map(() => ({ title: this.titleInput.value, isMobile: this.isMobile.checked })),
                takeUntil(this.onDestroy$)
            )
            .subscribe(({ title, isMobile }) => {
                this.store.title = title;
                this.store.isMobile = isMobile;
                this.titleForm.reset();
            });
    }
}