import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdSpinner } from '@angular2-material/progress-circle';

@Component({
  moduleId: module.id,
  selector: 'guides-example-app',
  template: `
    <md-toolbar>
      {{title}}
    </md-toolbar>
    <md-spinner color="primary"></md-spinner>
  `,
  styles: [`
    md-spinner {
      margin: 24px auto 0;
    }
  `],
  directives: [MdToolbar, MdSpinner]
})
export class GuidesExampleAppComponent {
  title = 'Hello Mobile';
}
