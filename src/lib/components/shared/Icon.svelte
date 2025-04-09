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
  import randomOne from '@icons/pool/random-one.svg?raw';
  import randomTwo from '@icons/pool/random-two.svg?raw';
  import randomThree from '@icons/pool/random-three.svg?raw';
  import randomFour from '@icons/pool/random-four.svg?raw';
  import randomFive from '@icons/pool/random-five.svg?raw';
  import randomSix from '@icons/pool/random-six.svg?raw';
  import randomSeven from '@icons/pool/random-seven.svg?raw';
  import randomEight from '@icons/pool/random-eight.svg?raw';
  import randomNine from '@icons/pool/random-nine.svg?raw';
  import randomTen from '@icons/pool/random-ten.svg?raw';

  // Miscellaneous Icons
  import options from '@icons/miscellaneous/options.svg?raw';

  // STATES & PROPS
  let { name, className } = $props();

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
    default:
      svg = null;
  }
</script>

<div class={twMerge('grid place-items-center', className)}>{@html svg}</div>
