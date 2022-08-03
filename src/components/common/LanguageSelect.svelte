<script lang="ts">
  type Value = unknown;
  type Option = {
    key: string;
    text: string;
    value: Value;
  };
  export let options: Option[];
  export let selectedValue: Value;
  export let onValueSelect: (value: Value) => void;

  $: selectedText = options.find(({ value }) => value === selectedValue)?.text;

  let isToggle: boolean = false;
  function handleToggle() {
    isToggle = !isToggle;
  }
  function handleBlur() {
    isToggle = false;
  }
  function handleSelect(selectedValue: unknown) {
    isToggle = false;
    onValueSelect(selectedValue);
  }
</script>

<div class="relative text-gray-400 pb-2 print:hidden">
  <button
    class=" w-28 flex justify-between px-2 py-1 border border-gray-300 rounded-md"
    on:click={handleToggle}
    on:blur={handleBlur}
  >
    <span>{selectedText}</span>
    <span>
      {#if isToggle}
        <i class="fa-solid fa-angle-up" />
      {:else}
        <i class="fa-solid fa-angle-down" />
      {/if}
    </span>
  </button>
  <div
    class={`${
      isToggle ? 'block' : 'hidden'
    } absolute top-full right-0 w-full p-2 border border-gray-300 rounded-md bg-white`}
  >
    <ul class="space-y-1">
      {#each options as { key, text, value }}
        <li>
          <button
            id={key}
            class="w-full text-left whitespace-nowrap"
            on:mousedown|preventDefault
            on:click|stopPropagation={() => {
              handleSelect(value);
            }}
          >
            {text}
          </button>
        </li>
      {/each}
    </ul>
  </div>
</div>
