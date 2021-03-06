import { SideBarService } from './../side-bar.service';
import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  // Communication Through Parent Component
  // @HostBinding('class.is-open')
  // @Input()
  // isOpen = false;

  // By Passing Reference Of One Component To Another

  // @HostBinding('class.is-open')
  // isOpen = false;
  // toggle() {
  //   this.isOpen = !this.isOpen;
  // }

  // Communication Using Service

  @HostBinding('class.is-open')
  isOpen = false;

  constructor(private sideBarService: SideBarService) {}

  ngOnInit() {
    this.sideBarService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }
}
