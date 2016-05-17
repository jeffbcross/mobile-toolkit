import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'guides-example-app',
  template: `
  <h1>
    {{title}}
  </h1>
  `,
  styles: []
})
export class GuidesExampleAppComponent {
  title = 'guides-example works!';
}
