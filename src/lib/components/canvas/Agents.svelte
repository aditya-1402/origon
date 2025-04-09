<script>
  import { scale } from 'svelte/transition';
  import { AGENT_COLORS } from '$lib/utils/constants';
  import Icon from '$lib/components/shared/Icon.svelte';

  // CONSTANTS
  const MAX_NODES = 10;
  const RANDOM_ICONS = [
    'random-one',
    'random-two',
    'random-three',
    'random-four',
    'random-five',
    'random-six',
    'random-seven',
    'random-eight',
    'random-nine',
    'random-ten'
  ];
  const CREATE_NODE = {
    id: 'create-node',
    label: 'Create',
    color: '#000000'
  };

  // STATES & PROPS
  let radius = $state(100);
  let mainNodeSize = $state(100);
  let childNodeSize = $state(56);
  let nodes = $state([CREATE_NODE]);
  let containerElement = $state(null);
  let usedColors = $state(new Set());
  let usedIcons = $state(new Set());

  // FUNCTIONS & HANDLERS
  function generateNodeColor() {
    const availableColors = AGENT_COLORS.filter((color) => !usedColors.has(color));
    const color = availableColors[Math.floor(Math.random() * availableColors.length)];
    usedColors.add(color);
    return color;
  }

  function generateNodeIcon() {
    const availableIcons = RANDOM_ICONS.filter((icon) => !usedIcons.has(icon));
    const icon = availableIcons[Math.floor(Math.random() * availableIcons.length)];
    usedIcons.add(icon);
    return icon;
  }

  function addNode() {
    if (nodes.length >= MAX_NODES + 1) return; // +1 for create node

    const newNode = {
      id: `node-${nodes.length}`,
      label: nodes.length,
      color: generateNodeColor(),
      icon: generateNodeIcon()
    };

    if (nodes.length === MAX_NODES) {
      // Replace create node with the last node
      nodes = nodes.slice(1).concat(newNode);
    } else {
      nodes = [CREATE_NODE, ...nodes.slice(1), newNode];
    }
  }

  function calculateNodePositions(index, totalNodes) {
    if (index === 0 && totalNodes === 1) {
      return { x: 0, y: -radius };
    }

    // For multiple nodes, distribute them evenly
    const angleStep = (2 * Math.PI) / totalNodes;
    // Start from the top (-Math.PI/2) and go clockwise
    const angle = -Math.PI / 2 + index * angleStep;

    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    return { x, y };
  }

  function generateCurvedPath(x, y) {
    const distance = Math.sqrt(x * x + y * y);
    const offsetFactor = distance * 0.2;

    // Calculate the perpendicular vector
    const perpX = (-y / distance) * offsetFactor;
    const perpY = (x / distance) * offsetFactor;

    // Create the path using a quadratic Bezier curve
    return `M 0,0 Q ${perpX},${perpY} ${x},${y}`;
  }

  // EFFECTS
  $effect(() => {
    const handleResize = () => {
      if (containerElement) {
        const width = containerElement.offsetWidth;
        const height = containerElement.offsetHeight;
        const minDimension = Math.min(width, height) * 0.85;

        radius = minDimension / 2 - childNodeSize;
        mainNodeSize = Math.max(MAIN_NODE_SIZE, Math.min(MAIN_NODE_SIZE, minDimension * 0.15));
        childNodeSize = Math.max(CHILD_NODE_SIZE, Math.min(CHILD_NODE_SIZE, minDimension * 0.1));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
</script>

<div
  bind:this={containerElement}
  class="relative flex h-full w-full items-center justify-center overflow-hidden"
>
  <svg class="pointer-events-none absolute h-full w-full">
    <g transform="translate(50%, 50%)">
      {#each nodes as node, index}
        {@const position = calculateNodePositions(index, nodes.length)}
        <path
          d={generateCurvedPath(position.x, position.y)}
          stroke={node.color}
          strokeWidth="2"
          fill="none"
          class="transition-all duration-500 ease-in-out"
        />
      {/each}
    </g>
  </svg>

  <button
    id="main-node"
    style="
      width: {mainNodeSize}px;
      height: {mainNodeSize}px;
    "
    class="absolute z-10 flex transform items-center justify-center rounded-full bg-gray-800 text-white shadow-lg transition-all duration-300 hover:scale-105"
  >
    <Icon name="origon" class="size-12" />
  </button>

  {#each nodes as node, index}
    {@const position = calculateNodePositions(index, nodes.length)}
    <button
      in:scale={{
        duration: 500
      }}
      class="absolute flex transform items-center justify-center rounded-full shadow-md transition-all duration-500 ease-in-out hover:scale-105"
      style="
        width: {childNodeSize}px;
        height: {childNodeSize}px;
        transform: translate({position.x}px, {position.y}px);
        background-color: {node.color};
        color: white;
      "
      onclick={node.id === 'create-node' ? addNode : undefined}
    >
      {#if node.id === 'create-node'}
        <Icon name="plus" class="size-6" />
      {:else}
        <Icon name={node.icon} class="size-6" />
      {/if}
    </button>
  {/each}
</div>

<style>
  #main-node {
    background-image: linear-gradient(
      to right,
      #003c91 -25.04%,
      #059dff -12.93%,
      #14b3f4 1.4%,
      #6549d5 40.83%,
      #e33fa1 65.62%,
      #fb5343 78.7%,
      #fd7b42 96.86%
    );
  }
</style>
