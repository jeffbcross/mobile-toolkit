import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';

@Component({
  moduleId: module.id,
  selector: 'guides-example-app',
  template: `
    <md-toolbar>
      {{title}}
    </md-toolbar>
  `,
  styles: [],
  directives: [MdToolbar]
})
export class GuidesExampleAppComponent {
  title = 'Hello Mobile';
}
