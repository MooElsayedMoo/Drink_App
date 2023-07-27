import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})
export class MenueComponent implements OnInit {


  ds ='none';

  @HostListener('window:scroll', ['$event'])
  onScroll(click: Event): boolean {
    if ((click.target as Document).scrollingElement!.scrollTop >= 400) {
      this.ds = 'block';
    } else {
      this.ds = 'none';
    }
  return false;
  }
  toTop(): void {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
