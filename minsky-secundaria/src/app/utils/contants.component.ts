import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ConstantsComponent {
    public getUrlInscripcion(): string {
        return 'https://idukay.net/#/public/aspirants/610435e33a89d62242699773';
    }
}