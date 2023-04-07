import { Component, Input } from '@angular/core';

@Component({
  selector: 'bl',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.scss'],
})
export class ButtonLinkComponent {
  @Input() routerLink = '';
  @Input() type = 'button';
  @Input() text = '';
  @Input() variant = '';

  @Input() svgWidth = '0px';
  @Input() svgFill = '';
  @Input() svgVariant = '';
  @Input() svgTitle = '';
}
