import { animate, animateChild, group, query, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { bgInsertIn, fadeIn, insertIn } from 'src/animations';

@Component({
  selector: 'douz-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  animations: [[
    trigger('fade', fadeIn('1s ease-in')),
    // trigger('bgInsertIn', bgInsertIn('1s .2s cubic-bezier(.1,.67,.5,.9)', 'top')),
    trigger('insertR', insertIn('.7s ease-out')),
    trigger('insertRDelayed', insertIn('.7s .2s ease-out')),
    trigger('insertL', insertIn('.7s ease-out', 'right')),


    trigger('bgInsertIn', [
      bgInsertIn('1s', 'top')[0],
      transition('* <=> *', [
        group([
          // query('@fade', animateChild()),
          query('@insertR', animateChild(), { optional: true }),
          query('@insertRDelayed', animateChild(), { optional: true }),
          query('@insertL', animateChild(), { optional: true }),
          animate('1s .1s cubic-bezier(.52, .13, 0, 1.24)'),
        ]),
      ]),
    ]),



  ]]
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
