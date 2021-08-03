// eslint-disable-next-line import/prefer-default-export
export const getHighestId = (dataArray) => {
  // if empty array => id = 0
  let highestId = 0;

  if (dataArray.length > 0) {
    // array with all ids

    const ids = dataArray.map((item) => item.id);
    // console.log(ids)

    // The highest id
    highestId = Math.max(...ids);
  }

  return highestId;
};

// // create an object that represents the new task
// onAddTask = () => {
//   const { newTaskLabel, tasks } = this.state;
//   const tasksIds = tasks.map((task) => task.id);
//   const newTask = {
//     id: Math.max(...tasksIds) + 1,
//     label: newTaskLabel,
//     done: false,
//   };
