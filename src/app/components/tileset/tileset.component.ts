import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeIn, insertIn } from 'src/scripts/animations';

@Component({
  selector: 'douz-tileset',
  templateUrl: './tileset.component.html',
  styleUrls: ['./tileset.component.scss'],
  animations: [[
    trigger('fade', fadeIn('1s .5s cubic-bezier(1,0,0,.63)')),
    trigger('insertL', insertIn('.5s .5s cubic-bezier(.1,.67,.5,.9)', 'left', '33vmin')),
    trigger('insertLDelayed', insertIn('.5s .7s cubic-bezier(.1,.67,.5,.9)', 'left', '10%')),
    trigger('insertR', insertIn('.5s 1s cubic-bezier(.1,.67,.5,.9)', 'right', '53vmin')),
    trigger('insertT', insertIn('.5s .8s cubic-bezier(.1,.67,.5,.9)', 'top', '33vmin')),
    trigger('insertB', insertIn('.5s .9s cubic-bezier(.1,.67,.5,.9)', 'bottom', '33vmin')),


    // trigger('insertL', insertIn('2s cubic-bezier(.1,.67,.5,.9)', 'top')),
  ]]
})
export class TilesetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
