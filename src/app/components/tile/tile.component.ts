import { trigger, transition, query, animateChild, animate, group } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { fadeIn, insertIn, bgInsertIn } from 'src/scripts/animations';

@Component({
  selector: 'douz-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
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
export class TileComponent implements OnInit {
  @Input() tileStyle = ""
  @Input() textStyle = ""
  @Input() divBg = ""

  constructor() { }

  ngOnInit(): void {
    this.setColors()
  }

  setColors(): void {

    if(this.textStyle === ''){
      if(this.tileStyle === '' && this.divBg === ''){
        this.textStyle = 'dark'
        this.tileStyle = 'white'
      }
      else{
        if(this.tileStyle.endsWith('-light')){
          this.textStyle = 'dark'
        }
        else{
          this.textStyle = 'white'
        }
      }
    }
    let st = this.tileStyle
    if(st.endsWith('-dark')){
      st = st.replace('-dark', '')
    }
    else if(st.endsWith('-light')){
      st = st.replace('-light', '')
    }

    if(['primary', 'link', 'info', 'success', 'warning', 'danger', 'dark', 'text', 'white'].includes(st)){
      this.tileStyle = "tile is-child notification has-background-"+this.tileStyle
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
