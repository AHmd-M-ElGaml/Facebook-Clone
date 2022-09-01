import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2  } from '@angular/core';

@Component({
  selector: 'app-left-home',
  templateUrl: './left-home.component.html',
  styleUrls: ['./left-home.component.scss']
})

export class LeftHomeComponent implements OnInit {
  theme:boolean = true;
  constructor(@Inject(DOCUMENT) private document: Document,
  private renderer: Renderer2,) { }

  ngOnInit(): void {
  }

  switchTheme () :any{
    if (this.theme) {
      this.theme = false;
      this.renderer.addClass(document.body, 'dark-color');
    } else if (!this.theme) {
      this.theme = true;
      this.renderer.removeClass(document.body, 'dark-color')
    }
  }

}
