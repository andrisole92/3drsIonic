import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-inquiry-form',
    templateUrl: './inquiry-form.page.html',
    styleUrls: ['./inquiry-form.page.scss'],
})
export class InquiryFormPage implements OnInit {
    private inquireForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router
    ) {
        this.inquireForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            i: ['', Validators.required],
        });
    }

    ngOnInit() {
    }

    submitForm() {
    }
}
