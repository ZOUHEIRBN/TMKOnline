import { Component, OnInit } from '@angular/core';
import { sectionAnims } from 'src/scripts/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [...sectionAnims]
})
export class LandingPageComponent implements OnInit {

  styles: Partial<CSSStyleDeclaration> = {
    maxWidth: '500px',
    margin: '0 auto',
  };
  options = {

  }
  constructor() { }


  ngOnInit(): void {
  }

}
