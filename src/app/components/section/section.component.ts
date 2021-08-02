import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'douz-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() title = ''
  @Input() subtitle = ''
  constructor() { }

  ngOnInit(): void {
  }

}
