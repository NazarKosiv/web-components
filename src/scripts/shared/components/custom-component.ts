import AppStore from "../../store/store";
import { Subject } from "rxjs";

export default class CustomComponent extends HTMLElement {
    protected tmpl: HTMLTemplateElement = document.createElement('template');

    protected _store: AppStore;
    public get store(): AppStore {
        return this._store;
    }
    public set store(store: AppStore) {
        if (!this._store) {
            this._store = store;
        }
    }

    protected onDestroy$: Subject<void> = new Subject<void>();

    constructor(protected tmplInnerHtml: string) {
        super();
        this.tmpl.innerHTML = this.tmplInnerHtml;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(this.tmpl.content.cloneNode(true));
    }

    public disconnectedCallback(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}
