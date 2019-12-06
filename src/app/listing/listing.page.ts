import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-listing',
    templateUrl: './listing.page.html',
    styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
    slideOpts = {
        initialSlide: 1,
        loop: true,
        speed: 400
    };

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    async openGallery() {
        await this.router.navigateByUrl('/gallery');
    }

    async openInquiryForm() {
        await this.router.navigateByUrl('/inquiry-form');
    }
}
