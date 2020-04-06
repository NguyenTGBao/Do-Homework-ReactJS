// import * as types from './../constants/ActionTypes';

// var s4 = () => {
//     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// }

// var generateID = () => {
//     return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
// }

// var findIndex = (tasks, id) => {
//     // var { tasks } = this.state;
//     var result = -1;
//     tasks.forEach((task, index) => {
//         if (task.id === id) {
//             return result = index;
//         }
//     });
//     return result;
// }

// var data = JSON.parse(localStorage.getItem('tasks'));
// var initialState = data ? data : [];
// var myReducer = (state = initialState, action) => {
//     var id = '';
//     var index = -1;
//     switch (action.type) {
//         case types.LIST_ALL:
//             return state;
//         case types.SAVE_TASK:
//             var task = {
//                 id: action.task.id,
//                 name: action.task.name,
//                 // status: action.task.status  === 'true' ? true : false // vẫn bị khi sửa ở trường hợp status kích hoạt. 
//                 // Kích hoạt -> ẩn mà không nhấn vào ẩn hoặc kích hoạt

//                 // Lưu ý: Cần phải xoá value = target.value === 'true' ? true : false; ở function onChange ngoài TaskForm.js
//                 // or xoá === 'true' ? true : false ở dòng status: action.task.status
//                 // Nó sẽ bị lỗi ở công việc thêm/sữa task: kích hoạt -> ẩn, ẩn -> ẩn
//                 // Vì ép kiểu string -> boolean ở function onChange ngoài TaskForm.js thì ko cần phải ép lại or ngược lại
//                 // Đã sửa
//                 status: (action.task.status  === 'true' || action.task.status === true) ? true : false
//             };
//             if (!task.id) { // === action.task.id
//                 task.id = generateID();
//                 state.push(task);
//             } else {
//                 index = findIndex(state, task.id);
//                 state[index] = task;
//             }
//             localStorage.setItem('tasks', JSON.stringify(state));
//             return [...state];
//         case types.UPDATE_STATUS_TASK:
//             // var { tasks } = this.state;
//             id = action.id;
//             index = findIndex(state, id);
//             if (index !== -1) {
//                 // tasks[index].status = !tasks[index].status
//                 // this.setState({
//                 //     tasks: tasks
//                 // });
//                 // state[index].status = !state[index].status; // Cập nhật được trên console nhưng ko cập nhật dc trên view
//                 // Cách 1:
//                 // var cloneTask = {...state[index]};
//                 // cloneTask.status = !cloneTask.status;
//                 // state.splice(index, 1);
//                 // state.push(cloneTask);
//                 // Cách 2:
//                 // var cloneTask = {...state[index]};
//                 // cloneTask.status = !cloneTask.status;
//                 // state[index] = cloneTask;
//                 // Cách 3:
//                 state[index] = {
//                     ...state[index],
//                     status: !state[index].status
//                 };
//                 localStorage.setItem('tasks', JSON.stringify(state));
//             }
//             return [...state];
//         case types.DELETE_TASK:
//             id = action.id;
//             index = findIndex(state, id);
//             state.splice(index, 1);
//             localStorage.setItem('tasks', JSON.stringify(state));
//             return [...state];
//         default: return state;
//     }
// };

// export default myReducer;