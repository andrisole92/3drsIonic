import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-listing',
    templateUrl: './listing.page.html',
    styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    openGallery() {
      this.router.navigateByUrl('/gallery');
    }
}
