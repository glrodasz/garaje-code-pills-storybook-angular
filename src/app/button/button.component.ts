import { Component, Input } from '@angular/core';

const getStyles = (...args: string[]) => ['button', ...args].filter(Boolean);

@Component({
  selector: 'app-button',
  template: `<button [ngClass]="classes">{{ label }}</button>`,
  styleUrls: ['./button.component.css'],
})

export default class ButtonComponent {
  @Input()
  type: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @Input()
  label = '';

  public get classes(): string[] {
    return getStyles(this.type);
  }
}
