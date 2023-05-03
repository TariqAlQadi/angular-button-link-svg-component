import { Component, Input } from '@angular/core';

@Component({
  selector: 'bl',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.scss'],
})
export class ButtonLinkComponent {
  @Input() routerLink: string = '';
  @Input() type: string = 'button';
  @Input() text: string = '';
  @Input() variant: string = '';

  @Input() svgWidth: string = '0px';
  @Input() svgFill: string = '';
  @Input() svgVariant: string = '';
  @Input() svgTitle: string = '';
}
