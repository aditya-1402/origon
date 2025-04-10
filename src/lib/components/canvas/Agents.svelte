<script>
  import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';
  import { AGENT_COLORS } from '$lib/utils/constants';
  import Icon from '$lib/components/shared/Icon.svelte';
  import CreateAgentDropdown from './CreateAgentDropdown.svelte';

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
    color: '#f35b05'
  };

  // STATES & PROPS

  let centerX = $state();
  let centerY = $state();

  let isDialogOpen = $state(false);

  let radius = $state(100);
  let mainNodeSize = $state(100);
  let childNodeSize = $state(56);

  let nodes = $state([CREATE_NODE]);
  let usedIcons = $state(new Set());
  let usedColors = $state(new Set());

  let containerElement = $state(null);

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

  function addNode(agentName) {
    if (nodes.length >= MAX_NODES + 1) return;

    const newNode = {
      id: `node-${nodes.length}`,
      label: agentName,
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

  function handleNodeSelection(node) {
    console.log(`${node.label} is selected.`);
  }

  function openCreateDialog() {
    isDialogOpen = true;
  }

  function calculateNodePositions(index, totalNodes) {
    if (index === 0 && totalNodes === 1) {
      return { x: 0, y: -radius };
    }

    // For multiple nodes, distribute them evenly
    const angleStep = (2 * Math.PI) / totalNodes;
    console.log('Angle Step:', angleStep);
    // Start from the top (-Math.PI/2) and go clockwise
    const angle = -Math.PI / 2 + index * angleStep;
    console.log('Angle:', angle);
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    console.log('X:', x);
    console.log('Y:', y);

    return { x, y };
  }

  function generatePath(x, y) {
    const isOnAxis = Math.abs(x) < 0.0001 || Math.abs(y) < 0.0001;

    if (isOnAxis) {
      return `M 0,0 L ${x},${y}`;
    }

    const distance = Math.sqrt(x * x + y * y);
    const distFactor = 0.25; // how far out the control points reach
    const lift = distance * 0.3; // how much curve is applied vertically

    const controlX1 = x * distFactor;
    const controlY1 = y < 0 ? y * distFactor - lift : y * distFactor + lift;

    const controlX2 = x * (1 - distFactor);
    const controlY2 = y < 0 ? y * (1 - distFactor) - lift : y * (1 - distFactor) + lift;

    return `M 0,0 C ${controlX1},${controlY1} ${controlX2},${controlY2} ${x},${y}`;
  }

  // EFFECTS
  $effect(() => {
    const handleResize = () => {
      if (containerElement) {
        const width = containerElement.offsetWidth;
        const height = containerElement.offsetHeight;
        const minDimension = Math.min(width, height) * 0.85;

        radius = minDimension / 2 - childNodeSize;
        mainNodeSize = Math.max(mainNodeSize, Math.min(mainNodeSize, minDimension * 0.15));
        childNodeSize = Math.max(childNodeSize, Math.min(childNodeSize, minDimension * 0.1));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  onMount(() => {
    centerX = containerElement.offsetWidth / 2;
    centerY = containerElement.offsetHeight / 2;
  });
</script>

<div
  bind:this={containerElement}
  class="relative flex h-full w-full items-center justify-center overflow-hidden"
>
  <svg class="pointer-events-none absolute h-full w-full">
    <g transform={`translate(${centerX || 0}, ${centerY || 0})`}>
      {#each nodes as node, index (node.id)}
        {@const position = calculateNodePositions(index, nodes.length)}
        <path
          id={node.id}
          d={generatePath(position.x, position.y)}
          stroke={node.color}
          stroke-width="2"
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
    class="absolute z-10 flex transform items-center justify-center rounded-full bg-gray-800 text-white shadow-lg transition-all duration-300 hover:scale-110"
  >
    <Icon name="origon" class="size-12" />
  </button>

  {#each nodes as node, index (node.id)}
    {@const position = calculateNodePositions(index, nodes.length)}
    <button
      in:scale={{
        duration: 500
      }}
      class="absolute flex transform items-center justify-center rounded-full shadow-md transition-all duration-500 ease-in-out hover:scale-105"
      style="
        width: {childNodeSize}px;
        height: {childNodeSize}px;
        background-color: {node.color};
        color: white;
        transform-origin: center;
        transform: translate({position.x}px, {position.y}px);
      "
      onclick={node.id === 'create-node' ? openCreateDialog : () => handleNodeSelection(node)}
    >
      {#if node.id === 'create-node'}
        <Icon name="plus" class="size-6" />
      {:else}
        <Icon name={node.icon} class="size-6" />
      {/if}
    </button>

    <span
      class="bg-card dark:bg-muted absolute rounded-full px-3 py-1 text-sm shadow"
      style="
        transform: translate({position.x}px, {position.y + childNodeSize / 2 + 20}px)
      "
    >
      {node.id === 'create-node' ? 'Create Action' : node.label}
    </span>
  {/each}
</div>

<CreateAgentDropdown bind:open={isDialogOpen} onSubmit={addNode} />

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
