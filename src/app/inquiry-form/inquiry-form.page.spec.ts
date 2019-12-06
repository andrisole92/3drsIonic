import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InquiryFormPage } from './inquiry-form.page';

describe('InquiryFormPage', () => {
  let component: InquiryFormPage;
  let fixture: ComponentFixture<InquiryFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiryFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InquiryFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
