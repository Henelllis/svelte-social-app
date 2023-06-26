<script>
  import Editable from "./Editable.svelte";
  import TrashCan from "./TrashCan.svelte";
  import { taskListStore } from "../../stores/tasks";

  export let task;
  export let listIdx;
  export let taskIdx;

  let value = task.text;

  function updateTask(event) {
    taskListStore.updateTask(
      {
        id: task.id,
        text: event.detail.taskText
      },
      listIdx
    );
  }
  function dragStart(e) {
    console.log("I AM DRAGGING");
    const data = {
      taskIdx,
      listIdx
    };

    e.dataTransfer.setData("text/plain", JSON.stringify(data));
  }
</script>

<div
  draggable={true}
  on:dragstart={dragStart}
  class="flex-it border border-solid p-2 rounded-xl bg-slate-500 mb-2 cursor-pointer"
>
  <div class="flex-it">
    <Editable bind:value on:editCancel={updateTask}>
      <div class="flex-it flex-row">
        <div class="flex flex-1">{task.text}</div>
        <div class="flex items-end hover:text-red-600">
          <TrashCan />
        </div>
      </div>
    </Editable>
  </div>
</div>
