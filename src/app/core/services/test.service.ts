import { Injectable } from "@angular/core";
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class TestService {
    constructor(private firestore: Firestore) {}

    async getTestString() {
        const docRef = doc(this.firestore, "test", "test");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data()['test'];
        } else {
            return null;
        }
    }
}