import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
  query,
  animateChild,
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

  if(direction === 'top'){
    animStyle = style({
      'transform': "translateY("+offset+")"
    })
  }
  else if(direction === 'bottom'){
    animStyle = style({
      'transform': "translateY(-"+offset+")"
    })
  }
  else if(direction === 'right'){
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

export const sectionAnims = [[
  trigger('fade', fadeIn('1s ease-in')),
  // trigger('bgInsertIn', bgInsertIn('1s .2s cubic-bezier(.1,.67,.5,.9)', 'top')),
  trigger('insertR', insertIn('.7s cubic-bezier(.1,.67,.5,.9)')),
  trigger('insertRDelayed', insertIn('.7s .2s cubic-bezier(.1,.67,.5,.9)', 'left', '10%')),
  trigger('insertL', insertIn('.7s cubic-bezier(.1,.67,.5,.9)', 'right')),
  trigger('insertLDelayed', insertIn('.5s .7s cubic-bezier(.1,.67,.5,.9)', 'left', '10%')),

  trigger('insertB', insertIn('.7s cubic-bezier(.1,.67,.5,.9)', 'bottom')),
  trigger('insertT', insertIn('.7s cubic-bezier(.1,.67,.5,.9)', 'top')),

  // trigger('insertLDelayed', insertIn('.5s .7s cubic-bezier(.1,.67,.5,.9)', 'left', '10%')),

  trigger('bgInsertIn', [
    bgInsertIn('1s', 'top')[0],
    transition('* <=> *', [
      group([
        query('@fade', animateChild(), { optional: true }),

        query('@insertR', animateChild(), { optional: true }),
        query('@insertL', animateChild(), { optional: true }),
        query('@insertB', animateChild(), { optional: true }),
        query('@insertT', animateChild(), { optional: true }),

        query('@insertRDelayed', animateChild(), { optional: true }),
        query('@insertLDelayed', animateChild(), { optional: true }),
        query('@insertBDelayed', animateChild(), { optional: true }),
        query('@insertTDelayed', animateChild(), { optional: true }),

        animate('1s .1s cubic-bezier(.52, .13, 0, 1.24)'),
      ]),
    ]),
  ]),



]]
