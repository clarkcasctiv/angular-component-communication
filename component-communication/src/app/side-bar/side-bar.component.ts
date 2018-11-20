import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  // Communication Through Parent Component
  @HostBinding('class.is-open')
  @Input()
  isOpen = false;

  // By Passing Reference Of One Component To Another
  // @HostBinding('class.is-open')
  // isOpen = false;

  // toggle() {
  //   this.isOpen = !this.isOpen;
  // }
}
