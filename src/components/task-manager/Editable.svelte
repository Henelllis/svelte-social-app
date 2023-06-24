<script>
  import { createEventDispatcher } from "svelte";
  export let value;
  let isEditing = false;

  const dispatch = createEventDispatcher();
</script>

{#if isEditing}
  <div class="flex-it">
    <textarea bind:value />
    <button
      class="flex underline"
      on:click={() => {
        isEditing = false;
        dispatch("editCancel", {
          taskText: value,
          taskNumber: 111
        });
      }}>CLOSE</button
    >
    <div>{value}</div>
  </div>
{:else}
  <button
    on:click={() => {
      isEditing = true;
    }}
  >
    <slot />
  </button>
{/if}
