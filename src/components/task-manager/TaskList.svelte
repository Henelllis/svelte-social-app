<script context="module">
  let listHoverId = null;
</script>

<script>
  import TaskItem from "./TaskItem.svelte";
  import TrashCan from "./TrashCan.svelte";
  import { taskListStore } from "../../stores/tasks.js";

  export let task;
  export let listIdx;

  console.log("MY TASK  " + JSON.stringify(task));

  function drop(event) {
    const sourceJson = event.dataTransfer.getData("text/plain");
    const sourceData = JSON.parse(sourceJson);
    console.log("SOURCE listIdx  -> " + sourceData.listIdx);
    console.log("SOURCE taskIdx  -> " + sourceData.taskIdx);
    console.log("TTARGET listIdx  -> " + listIdx);

    taskListStore.moveTask(sourceData.listIdx, listIdx, sourceData.taskIdx);
  }
</script>

<!-- <div class="text-white">{listHoverId}</div> -->
<div class="flex-it h-full w-80 max-w-sm min-h-full m-2 my-0">
  <div
    on:dragenter|preventDefault={(event) => {
      listHoverId = task.id;
    }}
    on:dragover|preventDefault={(event) => {}}
    on:drop={drop}
    class:hovering={listHoverId === task.id}
    class="bg-slate-400 flex-it rounded-xl max-h-full border-2 border-gray-500"
  >
    <div class="flex-it m-3">
      <div class="flex-it flex-row">
        <div class="text-xl text-left font-bold mr-2">{task.text}</div>
        <div class="flex hover:text-red-600 items-center">
          <TrashCan />
        </div>
      </div>
    </div>
    <div class="overflow-x-hidden overflow-y-auto with-scrollbar p-2">
      {#each task.items as item, taskIdx (item.id)}
        <TaskItem task={item} {listIdx} {taskIdx} />
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
