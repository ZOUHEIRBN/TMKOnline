import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export function fadeIn(duration){
  return [
    state('void', style({
      opacity: 0
    })),
    transition('void <=> *', [
      animate(duration)
    ])]
}

export function bgInsertIn(duration, direction='left', offset='50vmin'){
  let offsetX = '0%'
  let offsetY = '0%'

  if(direction == 'top'){
    offsetY = offset
  }
  else if(direction == 'bottom'){
    offsetY = "-" + offset
  }
  else if(direction == 'right'){
    offsetX = "-" + offset
  }
  else {
    offsetX = offset
  }


  return [
    state('void', style({
      backgroundPositionX: offsetX,
      backgroundPositionY: offsetY,
    })),
  transition('void <=> *', [
      animate(duration)
    ])]
}

export function insertIn(duration, direction='left', offset='50vmin'){
  let animStyle = style({
    'transform': "translateX(-"+offset+")"
  })

  if(direction == 'top'){
    animStyle = style({
      'transform': "translateY("+offset+")"
    })
  }
  else if(direction == 'bottom'){
    animStyle = style({
      'transform': "translateY(-"+offset+")"
    })
  }
  else if(direction == 'right'){
    animStyle = style({
      'transform': "translateX("+offset+")"
    })
  }

  return [
    state('void', animStyle),
    transition('void <=> *', [
      animate(duration)
    ])]
}
