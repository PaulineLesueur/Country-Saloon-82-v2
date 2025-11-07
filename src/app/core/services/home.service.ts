import { Injectable } from "@angular/core";
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class HomeService {
    constructor(private firestore: Firestore) {}

    async getLinks() {
        const docRef = doc(this.firestore, 'home', "links");
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) {
            const data = docSnap.data();
            const photoUrls = data['photoUrls'] || [];
            const titles = data['titles'] || [];
            return titles.map((title: string, index: number) => ({
                title,
                photoUrl: photoUrls[index]
            }));
        } else {
            return [];
        }
    }    
}