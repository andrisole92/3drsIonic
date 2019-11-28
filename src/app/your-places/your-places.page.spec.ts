import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourPlacesPage } from './your-places.page';

describe('YourPlacesPage', () => {
  let component: YourPlacesPage;
  let fixture: ComponentFixture<YourPlacesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourPlacesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourPlacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
