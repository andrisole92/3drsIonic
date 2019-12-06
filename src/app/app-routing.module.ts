import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'listing',
    loadChildren: () => import('./listing/listing.module').then( m => m.ListingPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'location-selection',
    loadChildren: () => import('./location-selection/location-selection.module').then( m => m.LocationSelectionPageModule)
  },
  {
    path: 'your-places',
    loadChildren: () => import('./your-places/your-places.module').then( m => m.YourPlacesPageModule)
  },
  {
    path: 'add-listing',
    loadChildren: () => import('./add-listing/add-listing.module').then( m => m.AddListingPageModule)
  },
  {
    path: 'inquiry-form',
    loadChildren: () => import('./inquiry-form/inquiry-form.module').then( m => m.InquiryFormPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
