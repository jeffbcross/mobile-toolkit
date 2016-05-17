import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { GuidesExampleAppComponent } from '../app/guides-example.component';

beforeEachProviders(() => [GuidesExampleAppComponent]);

describe('App: GuidesExample', () => {
  it('should create the app',
      inject([GuidesExampleAppComponent], (app: GuidesExampleAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'guides-example works!\'',
      inject([GuidesExampleAppComponent], (app: GuidesExampleAppComponent) => {
    expect(app.title).toEqual('guides-example works!');
  }));
});
