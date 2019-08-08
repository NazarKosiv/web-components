import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

export default class AppStore {
    private titleMsgSrc$: BehaviorSubject<string> = new BehaviorSubject<string>('Default Title');
    public title$: Observable<string> = this.titleMsgSrc$.asObservable().pipe(
        distinctUntilChanged()
    );
    public set title(title: string) {
        this.titleMsgSrc$.next(title);
    }
    public get title(): string {
        return this.titleMsgSrc$.getValue();
    }
    constructor() {}
}
