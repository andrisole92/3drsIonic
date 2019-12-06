import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    slideOpts = {
        initialSlide: 1,
        loop: true,
        speed: 400
    };
    constructor(private router: Router) {
    }

    helloWorld() {
        console.log('hello world');
        this.router.navigateByUrl('/listing');
    }

    openLocationSearch() {
        console.log('hello world');
        this.router.navigateByUrl('/location-selection');
    }
}
