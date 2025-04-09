<script>
  import { twMerge } from 'tailwind-merge';

  // Chevron Icons
  import chevronUp from '@icons/chevron/chevron-up.svg?raw';
  import chevronDown from '@icons/chevron/chevron-down.svg?raw';
  import chevronLeft from '@icons/chevron/chevron-left.svg?raw';
  import chevronRight from '@icons/chevron/chevron-right.svg?raw';

  // Status Icons
  import deploy from '@icons/status/deploy.svg?raw';
  import status from '@icons/status/status.svg?raw';

  // Node Pool Icons
  import randomOne from '@icons/nodes/random-one.svg?raw';
  import randomTwo from '@icons/nodes/random-two.svg?raw';
  import randomThree from '@icons/nodes/random-three.svg?raw';
  import randomFour from '@icons/nodes/random-four.svg?raw';
  import randomFive from '@icons/nodes/random-five.svg?raw';
  import randomSix from '@icons/nodes/random-six.svg?raw';
  import randomSeven from '@icons/nodes/random-seven.svg?raw';
  import randomEight from '@icons/nodes/random-eight.svg?raw';
  import randomNine from '@icons/nodes/random-nine.svg?raw';
  import randomTen from '@icons/nodes/random-ten.svg?raw';

  // Miscellaneous Icons
  import plus from '@icons/miscellaneous/plus.svg?raw';
  import trash from '@icons/miscellaneous/trash.svg?raw';
  import options from '@icons/miscellaneous/options.svg?raw';
  import rename from '@icons/miscellaneous/rename.svg?raw';
  import origon from '@icons/miscellaneous/origon.svg?raw';
  import samespace from '@icons/miscellaneous/samespace.svg?raw';

  // STATES & PROPS
  let { name, className, ...restProps } = $props();

  // ICON HANDLER
  let svg = $state(null);

  switch (name) {
    // Chevron Icons
    case 'chevron-down':
      svg = chevronDown;
      break;
    case 'chevron-left':
      svg = chevronLeft;
      break;
    case 'chevron-right':
      svg = chevronRight;
      break;
    case 'chevron-up':
      svg = chevronUp;
      break;
    // Status Icons
    case 'deploy':
      svg = deploy;
      break;
    case 'status':
      svg = status;
      break;
    // Node Pool Icons
    case 'random-one':
      svg = randomOne;
      break;
    case 'random-two':
      svg = randomTwo;
      break;
    case 'random-three':
      svg = randomThree;
      break;
    case 'random-four':
      svg = randomFour;
      break;
    case 'random-five':
      svg = randomFive;
      break;
    case 'random-six':
      svg = randomSix;
      break;
    case 'random-seven':
      svg = randomSeven;
      break;
    case 'random-eight':
      svg = randomEight;
      break;
    case 'random-nine':
      svg = randomNine;
      break;
    case 'random-ten':
      svg = randomTen;
      break;
    // Miscellaneous Icons
    case 'options':
      svg = options;
      break;
    case 'samespace':
      svg = samespace;
      break;
    case 'rename':
      svg = rename;
      break;
    case 'trash':
      svg = trash;
      break;
    case 'origon':
      svg = origon;
      break;
    case 'plus':
      svg = plus;
      break;
    default:
      svg = null;
  }
</script>

<div class={twMerge('grid shrink-0 place-items-center', className)} {...restProps}>
  {@html svg}
</div>
