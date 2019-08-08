import CustomComponent from "../shared/components/custom-component";
import { fromEvent } from "rxjs";
import { takeUntil, filter, map, tap } from 'rxjs/operators';

const tmplInnerHtml = `
    <form id="title-form">
        <label for="title">Title</label>
        <input id="title" type="text" name="title" placeholder="change the title..."/>
    </form>
`;

export default class AppForm extends CustomComponent {
    private titleInput: HTMLInputElement;
    private titleForm: HTMLFormElement;

    constructor() {
        super(tmplInnerHtml);
    }

    public connectedCallback(): void {
        this.titleForm = this.shadowRoot.querySelector('#title-form');
        this.titleInput = this.shadowRoot.querySelector('#title');

        fromEvent(this.titleForm, 'submit')
            .pipe(
                tap((event) => event.preventDefault()),
                filter(() => this.titleInput.value !== ''),
                map(() => this.titleInput.value),
                takeUntil(this.onDestroy$)
            )
            .subscribe((value) => {
                this.store.title = value;
                this.titleForm.reset();
            });
    }
}