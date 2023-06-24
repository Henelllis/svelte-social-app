<script>
  import TaskItem from "./TaskItem.svelte";
  import TrashCan from "./TrashCan.svelte";

  export let task;
  export let listIdx;
</script>

<div class="flex-it h-full w-80 max-w-sm min-h-full m-2 my-0">
  <div class="bg-slate-400 flex-it rounded-xl max-h-full border-2 border-gray-500">
    <div class="flex-it m-3">
      <div class="flex-it flex-row">
        <div class="text-xl text-left font-bold mr-2">{task.text}</div>
        <div class="flex hover:text-red-600 items-center">
          <TrashCan />
        </div>
      </div>
    </div>
    <div class="overflow-x-hidden overflow-y-auto with-scrollbar p-2">
      {#each task.items as item (item.id)}
        <TaskItem task={item} {listIdx} />
      {/each}
    </div>
    <button class="underline flex p-2"> + Add Task </button>
  </div>
</div>
