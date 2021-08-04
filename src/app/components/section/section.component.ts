import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'douz-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() title = ''
  @Input() subtitle = ''
  @Input() divBg = ''
  @Input() sectionStyle = ''
  @Input() textStyle = ''
  constructor() { }
  ngOnInit(): void {
    this.setColors()
  }
  setColors(): void {
    if(this.sectionStyle === '' && this.divBg === ''){
      this.sectionStyle = 'dark'
    }
    if(this.textStyle === ''){
      this.textStyle = 'white'
    }
    let st = this.sectionStyle
    if(st.endsWith('-dark')){
      st = st.replace('-dark', '')
    }
    else if(st.endsWith('-light')){
      st = st.replace('-light', '')
    }

    if(['primary', 'link', 'info', 'success', 'warning', 'danger', 'dark', 'text', 'white'].includes(st)){
      this.sectionStyle = "has-background-"+this.sectionStyle
    }


    st = this.textStyle
    if(st.endsWith('-dark')){
      st = st.replace('-dark', '')
    }
    else if(st.endsWith('-light')){
      st = st.replace('-light', '')
    }

    if(['primary', 'link', 'info', 'success', 'warning', 'danger', 'dark', 'text', 'white'].includes(st)){
      this.textStyle = "has-text-"+this.textStyle
    }
  }

}
