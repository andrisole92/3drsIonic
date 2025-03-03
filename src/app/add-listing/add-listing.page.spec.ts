import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddListingPage } from './add-listing.page';

describe('AddListingPage', () => {
  let component: AddListingPage;
  let fixture: ComponentFixture<AddListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddListingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
