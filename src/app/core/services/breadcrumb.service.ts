import { Injectable } from "@angular/core";
import { MenuItem } from "primeng/api";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
    [x: string]: any;
    private itemsSubject = new BehaviorSubject<MenuItem[]>([]);
    items$ = this.itemsSubject.asObservable();

    setItems(items: MenuItem[]) {
        this.itemsSubject.next(items);
    }

    clear() {
        this.itemsSubject.next([]);
    }
}