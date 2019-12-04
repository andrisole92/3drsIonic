import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-your-places',
    templateUrl: './your-places.page.html',
    styleUrls: ['./your-places.page.scss'],
})
export class YourPlacesPage implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    openAddListingForm() {
        this.router.navigateByUrl('/add-listing');
    }
}
