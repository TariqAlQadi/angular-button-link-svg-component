import { Component, Input, OnInit } from '@angular/core';

//gives svgs-object key as string
interface SvgPaths {
  [key: string]: string;
}

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
})
export class SvgComponent implements OnInit {
  @Input() fill: string = '';
  @Input() width: string = '';
  @Input() variant: string = '';

  constructor() {}

  path: string = '';

  //all svg paths
  svgs: SvgPaths = {
    save: 'M7 22H9V24H7V22M11 22H13V24H11V22M15 22H17V24H15V22M17 2H5C3.89 2 3 2.9 3 4V18C3 19.1 3.89 20 5 20H19C20.1 20 21 19.1 21 18V6L17 2M19 18H5V4H16.17L19 6.83V18M12 11C10.34 11 9 12.34 9 14S10.34 17 12 17 15 15.66 15 14 13.66 11 12 11M6 5H15V9H6V5Z',
    delete:
      'M13 9H3V5H13M10 19C8.3 19 7 17.7 7 16S8.3 13 10 13 13 14.3 13 16 11.7 19 10 19M15 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H17C18.1 21 19 20.1 19 19V7L15 3M23 13H21V7H23V13M23 17H21V15H23V17Z',
  };

  //optional
  // setPath(): void {
  //   this.path = this.svgs[this.variant];
  // }

  ngOnInit(): void {
    if (this.variant && this.svgs[this.variant]) {
      this.path = this.svgs[this.variant];
    }
  }
}
