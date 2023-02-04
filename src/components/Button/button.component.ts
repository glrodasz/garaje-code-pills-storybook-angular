import { Component, Input, NgModule } from '@angular/core';

const getStyles = (...args: string[]) => ["button", ...args].filter(Boolean)

@Component({
  selector: 'custom-button',
  template: `<button [ngClass]="classes">{{ label }}</button>`,
  styleUrls: ['./button.css'],
})

export default class ButtonComponent {
  @Input()
  type = "primary";

  @Input()
  label = '';

  public get classes(): string[] {
    return getStyles(this.type)
  }
}
