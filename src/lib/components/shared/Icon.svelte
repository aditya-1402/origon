<script>
  // Chevron Icons
  import chevronDown from '@icons/chevron-down.svg?raw';

  // Status Icons
  import deploy from '@icons/deploy.svg?raw';
  import status from '@icons/status.svg?raw';

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

  // Options Icons
  import options from '@icons/options.svg?raw';

  // STATES & PROPS
  let { name, className } = $props();

  // ICON HANDLER
  let svg = $state(null);

  switch (name) {
    case 'chevron-down':
      svg = chevronDown;
      break;
    case 'deploy':
      svg = deploy;
      break;
    case 'status':
      svg = status;
      break;
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
    case 'options':
      svg = options;
      break;
    default:
      svg = null;
  }
</script>

<div class={className}>{@html svg}</div>
