import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  loginForm = new FormGroup({

    email: new FormControl('',Validators.required),
    password: new FormControl('')

  })

  get email(){
    return this.loginForm.get('email')
  }

  ds ='none';

  @HostListener('window:scroll', ['$event'])
  onScroll(click: Event): boolean {
    if ((click.target as Document).scrollingElement!.scrollTop >= 300) {
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
