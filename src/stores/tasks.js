import { writable } from "svelte/store";

const DEFAULT_DATA = [
  {
    id: "l-1",
    text: "List 1",
    items: [
      { id: "t-1", text: "Task 1" },
      { id: "t-2", text: "Task 2" },
      { id: "t-3", text: "Task 3" }
    ]
  },
  {
    id: "l-2",
    text: "List 2",
    items: [
      { id: "t-4", text: "Task 4" },
      { id: "t-5", text: "Task 5" },
      { id: "t-6", text: "Task 6" }
    ]
  },
  {
    id: "l-3",
    text: "List 3",
    items: [
      { id: "t-7", text: "Task 7" },
      { id: "t-8", text: "Task 8" },
      { id: "t-9", text: "Task 9" }
    ]
  }
];

function createStore() {
  //second arg for creation of subscription
  //return in second arg is unsubscribing function
  const storedList = localStorage.getItem("task-manager-store");

  const _taskList = storedList ? JSON.parse(storedList) : DEFAULT_DATA;

  const taskList = writable(_taskList);

  const { subscribe, update } = taskList;

  return {
    subscribe,
    updateTask: (task, listIdx) => {
      update((list) => {
        const taskIdx = list[listIdx].items.findIndex((item) => item.id === task.id);
        if (taskIdx > -1) {
          list[listIdx].items[taskIdx] = { ...task };
        }
        return list;
      });
    },
    addList: () => {
      update((list) => {
        return [
          ...list,
          {
            id: new Date().toISOString(),
            text: `List ${list.length + 1}`,
            items: []
          }
        ];
      });
    },
    addTask: (listIdx) => {
      update((list) => {
        const newList = [...list];
        newList[listIdx].items = [
          ...newList[listIdx].items,
          {
            id: new Date().toISOString(),
            text: "WHO AM I"
          }
        ];

        return newList;
      });
    },
    moveTask: (fromListIdx, toListIdx, taskIdx) => {
      update((list) => {
        console.log("old LIST " + JSON.stringify(list));

        const task = list[fromListIdx].items[taskIdx];
        console.log("TASK " + JSON.stringify(task));
        const newList = [...list];
        newList[fromListIdx].items.splice(taskIdx, 1);
        newList[toListIdx].items = [...newList[toListIdx].items, task];

        console.log("NEW LIST " + JSON.stringify(newList));
        return newList;
      });
    },
    removeTask: (listIdx, taskIdx) => {
      update((list) => {
        const newList = [...list];
        newList[listIdx].items.splice(taskIdx, 1);
        return newList;
      });
    },
    removeList: (listIdx) => {
      update((list) => {
        const newList = [...list];
        newList.splice(listIdx, 1);
        return newList;
      });
    },
    updateListText: (listIdx, text) => {
      update((list) => {
        const newList = [...list];
        newList[listIdx].text = text;
        return newList;
      });
    }
  };
}

export const taskListStore = createStore();

taskListStore.subscribe((list) => {
  if (list) {
    localStorage.setItem("task-manager-store", JSON.stringify(list));
  }
});
