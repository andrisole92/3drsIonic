import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ActionSheetController, LoadingController, Platform, ToastController} from '@ionic/angular';
import {Transfer} from '@ionic-native/transfer';
import {FilePath} from '@ionic-native/file-path/ngx';
import {FileOriginal} from '@ionic-native/file';
import {Camera} from '@ionic-native/camera/ngx';

declare var cordova: any;

@Component({
    selector: 'app-add-listing',
    templateUrl: './add-listing.page.html',
    styleUrls: ['./add-listing.page.scss'],
})
export class AddListingPage implements OnInit {
    private listingForm: FormGroup;
    lastImage: string = null;
    loading: any;

    constructor(private formBuilder: FormBuilder,
                public router: Router,
                private camera: Camera,
                // private transfer: Transfer,
                // private file: FileOriginal,
                // private filePath: FilePath,
                public actionSheetCtrl: ActionSheetController,
                public toastCtrl: ToastController,
                public platform: Platform,
                // public loadingCtrl: LoadingController
    ) {
        this.listingForm = this.formBuilder.group({
            title: ['', Validators.required],
            description: [''],
            price: ['', Validators.required],
        });
    }

    ngOnInit() {
    }

    async submitForm() {
        console.log('submitForm');
        await this.presentToast('Success!');
        await this.router.navigateByUrl('/listing');
    }

    async presentActionSheet() {
        const actionSheet: any = await this.actionSheetCtrl.create({
            header: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: () => {
                        this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: () => {
                        this.takePicture(this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        await actionSheet.present();
    }

    public takePicture(sourceType) {
        // Create options for the Camera Dialog
        const options = {
            quality: 100,
            sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };

        // Get the data of an image
        this.camera.getPicture(options).then((imagePath) => {
            // let correctPath, currentName;
            // Special handling for Android library
            // if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
            //     this.filePath.resolveNativePath(imagePath)
            //         .then(filePath => {
            //             correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            //             currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            //             this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            //         });
            // } else {
            //     currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
            //     correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
            //     this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            // }
        }, (err) => {
            this.presentToast('Error while selecting image.');
        });
    }

    // Create a new name for the image
//     private createFileName() {
//         const d = new Date(),
//             n = d.getTime();
//         return n + '.jpg';
//     }
//
//     async copyFileToLocalDir(namePath, currentName, newFileName) {
//         this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
//             this.lastImage = newFileName;
//         }, error => {
//             this.presentToast('Error while storing file.');
//         });
//     }
//
    async presentToast(text) {
        const toast = await this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        await toast.present();
    }

//
// // Always get the accurate path to your apps folder
//     public pathForImage(img) {
//         if (img === null) {
//             return '';
//         } else {
//             return cordova.file.dataDirectory + img;
//         }
//     }
}
