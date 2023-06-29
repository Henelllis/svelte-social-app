<script context="module">
  import { writable } from "svelte/store";
  let listHoverId = writable(null);
</script>

<script>
  import TaskItem from "./TaskItem.svelte";
  import TrashCan from "./TrashCan.svelte";
  import { flip } from "svelte/animate";
  import { fade, fly } from "svelte/transition";
  import { taskListStore } from "../../stores/tasks.js";
  import { receive, send } from "../../transitions/";
  import Editable from "./Editable.svelte";
  export let task;
  export let listIdx;

  let value = task.text;

  console.log("MY TASK  " + JSON.stringify(task));

  function drop(event) {
    const sourceJson = event.dataTransfer.getData("text/plain");
    const sourceData = JSON.parse(sourceJson);
    console.log("SOURCE listIdx  -> " + sourceData.listIdx);
    console.log("SOURCE taskIdx  -> " + sourceData.taskIdx);
    console.log("TTARGET listIdx  -> " + listIdx);

    taskListStore.moveTask(sourceData.listIdx, listIdx, sourceData.taskIdx);
    listHoverId.set(null);
  }

  function updateListText(event) {
    taskListStore.updateListText(listIdx, value);
  }
</script>

<!-- <div class="text-white">{listHoverId}</div> -->
<div class="flex-it h-full w-80 max-w-sm min-h-full m-2 my-0">
  <div
    on:dragenter|preventDefault={(event) => {
      listHoverId.set(task.id);
    }}
    on:dragover|preventDefault={(event) => {}}
    on:drop={drop}
    class:hovering={listHoverId === task.id}
    class="bg-slate-400 flex-it rounded-xl max-h-full border-2 border-gray-500"
  >
    <div class="flex-it m-3">
      <Editable bind:value on:editCancel={updateListText}>
        <div class="flex-it flex-row">
          <div class="text-xl text-left font-bold mr-2">{task.text}</div>
          <div class="flex hover:text-red-600 items-center">
            <button on:click|stopPropagation={() => taskListStore.removeList(listIdx)}>
              <TrashCan />
            </button>
          </div>
        </div>
      </Editable>
    </div>
    <div class="overflow-x-hidden overflow-y-auto with-scrollbar p-2">
      {#each task.items as item, taskIdx (item.id)}
        <div animate:flip>
          <TaskItem task={item} {listIdx} {taskIdx} />
        </div>
      {/each}
    </div>
    <button on:click={() => taskListStore.addTask(listIdx)} class="underline flex p-2">
      + Add Task
    </button>
  </div>
</div>

<style>
  .hovering {
    border: 2px solid orange;
  }
</style>
