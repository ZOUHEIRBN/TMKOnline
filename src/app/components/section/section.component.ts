import { animate, animateChild, group, query, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { bgInsertIn, fadeIn, insertIn, sectionAnims } from 'src/animations';

@Component({
  selector: 'douz-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  animations: sectionAnims
})
export class SectionComponent implements OnInit {
  @Input() title = ''
  @Input() subtitle = ''
  @Input() divBg = ''
  @Input() sectionStyle = ''
  @Input() textStyle = ''
  @Input() orientation = 'ltr'

  constructor() { }
  ngOnInit(): void {
    this.setColors()
  }
  setColors(): void {

    if(this.textStyle === ''){
      if(this.sectionStyle === '' && this.divBg === ''){
        this.textStyle = 'dark'
        this.sectionStyle = 'white'
      }
      else{
        this.textStyle = 'white'
      }
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
