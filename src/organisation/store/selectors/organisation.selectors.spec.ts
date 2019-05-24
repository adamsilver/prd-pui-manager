import { TestBed } from '@angular/core/testing';
import { select, Store, StoreModule } from '@ngrx/store';
import { OrganisationState } from '../reducers/organisation.reducer';
import { getOrganisationSel, getOrganisationState } from './organisation.selectors';
import { reducers } from '../index';
import { LoadOrganisationSuccess } from '../actions';
import { Organisation } from 'src/organisation/organisation.model';



describe('Organisation selectors', () => {
  let store: Store<OrganisationState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('organisation', reducers),
      ],
    });
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });



  describe('getOrganisationState', () => {
    it('should return organisationState', () => {
      let result;
      store.pipe(select(getOrganisationState)).subscribe(value => {
        result = value;
      });

      expect(result).toEqual({ organisation: new Organisation({}), loaded: false, loading: false });
    });
  });



  describe('getOrganisationSel', () => {
    it('should return user organisation objects', () => {
      let result;
      store.pipe(select(getOrganisationSel)).subscribe(value => {
        result = value;
      });

      const dummy = new Organisation({
        name: 'a@b.com',
        addressLine1: '10  oxford street',
        townCity: 'London',
        postcode: 'W1',
        houseNoBuildingName: 'house',
        addressLine2: '',
        country: 'UK'
      });

      store.dispatch(new LoadOrganisationSuccess(dummy));
      expect(result).toEqual(dummy);
    });
  });

});
