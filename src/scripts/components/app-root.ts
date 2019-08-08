import AppStore from '../store/store';
import CustomComponent from '../shared/components/custom-component';
import AppForm from './app-form';
import AppHeaderContainer from '../containers/app-header-container';

const tmpl = `
    <app-header-container></app-header-container>
    <app-form></app-form>
`;

export default class AppRoot extends CustomComponent {
    private appHeaderContainer: AppHeaderContainer;
    private appForm: AppForm;

    constructor() {
        super(tmpl);
    }

    public connectedCallback() {
        this.store = new AppStore();
        this.initApp();
    }

    private initApp(): void {
        this.appHeaderContainer = this.shadowRoot.querySelector('app-header-container') as AppHeaderContainer;
        this.appForm = this.shadowRoot.querySelector('app-form') as AppForm;

        this.appHeaderContainer.store = this.store;
        this.appForm.store = this.store;
    }
}
