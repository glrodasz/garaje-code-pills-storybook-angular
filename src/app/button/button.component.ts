import { Component, Input } from '@angular/core';

const getStyles = (...args: string[]) => ["button", ...args].filter(Boolean)

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input()
  label: string = '';

  @Input()
  type: "primary" | "secondary" | "tertiary" = "primary";

  public get classes(): string[] {
    return getStyles(this.type)
  }
}
