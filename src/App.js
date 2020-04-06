// import React from 'react';
// import Header from './component/Header'
// import Product from './component/Product'

// function App() {
//   return (
//     <div>
//       <Header />
//       <div className="row">
//         <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
//           <Product />
//         </div>
//         <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
//           <Product />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// Component: Header.js + Product.js
// Installed: npx create-react-app my-app && bootstrap 3.3.7 & jquery 3.2.1

// --------------------------------------------------------------------------------------------------------------

// import React from 'react';
// import './App.css'
// import Reset from './component/Reset'
// import Result from './component/Result'
// import ColorPicker from './component/ColorPicker'
// import SizeSetting from './component/SizeSetting'

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       color: 'red',
//       fontSize: 12
//     }
//     this.onSetColor = this.onSetColor.bind(this);
//     this.onChangeSize = this.onChangeSize.bind(this);
//     this.onSettingDefault = this.onSettingDefault.bind(this);
//   }

//   onSetColor(params) {
//     this.setState({
//       color: params
//     })
//   }

//   onChangeSize(value) {
//     this.setState({
//       fontSize: (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) ? this.state.fontSize + value : this.state.fontSize
//     })
//   }

//   onSettingDefault(value) {
//     if (value) {
//       this.setState({
//         color: 'red',
//         fontSize: 12
//       })
//     }
//   }

//   render() {
//     return (
//       <div className="container mt-50">
//         <div className="row">
//           <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
//           <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
//             <SizeSetting
//               fontSize={this.state.fontSize}
//               onChangeSize={this.onChangeSize}
//             />
//             <Reset onSettingDefault={this.onSettingDefault} />
//           </div>
//           <Result color={this.state.color} fontSize={this.state.fontSize} />
//         </div>
//       </div>
//     )
//   }
// }

// export default App;

// Component: Reset.js + ColorPicker.js + SizeSetting.js + Result.js
// Installed: npx create-react-app my-app && bootstrap 3.3.7 & jquery 3.2.1

// --------------------------------------------------------------------------------------------------------------

// import React from 'react';
// import './App.css'

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       txtUsername: '',
//       txtPassword: '',
//       txtDesc: '',
//       sltGender: 0,
//       rdLang: 'en',
//       chkbStatus: true
//     }
//     this.onHandleChange = this.onHandleChange.bind(this);
//     this.onHandleSubmit = this.onHandleSubmit.bind(this);
//   }

//   onHandleChange(event) {
//     var target = event.target;
//     var name = target.name;
//     var value = target.type === 'checkbox' ? target.checked : target.value;
//     this.setState({
//       [name]: value
//     })
//   }

//   onHandleSubmit(event) {
//     event.preventDefault();
//     console.log(this.state);
//   }

//   render() {
//     return (
//       <div className="container mt-30">
//         <div className="row">
//           <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
//             <div className="panel panel-primary">
//               <div className="panel-heading">
//                 <h3 className="panel-title">Form</h3>
//               </div>
//               <div className="panel-body">
//                 <form onSubmit={this.onHandleSubmit}>
//                   <div className="form-group">
//                     <label>Username:</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       name="txtUsername"
//                       value={this.state.txtUsername}
//                       onChange={this.onHandleChange}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>Password:</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       name="txtPassword"
//                       value={this.state.txtPassword}
//                       onChange={this.onHandleChange}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>Mô tả:</label>
//                     <textarea
//                       className="form-control"
//                       rows="3"
//                       name="txtDesc"
//                       value={this.state.txtDesc}
//                       onChange={this.onHandleChange}
//                     ></textarea>
//                   </div>
//                   <label>Giới Tính:</label>
//                   <select
//                     className="form-control"
//                     name="sltGender"
//                     value={this.state.sltGender}
//                     onChange={this.onHandleChange}
//                   >
//                     <option value={0}>Nữ</option>
//                     <option value={1}>Nam</option>
//                   </select>
//                   <br />
//                   <label>Ngôn Ngữ:</label>
//                   <div className="radio">
//                     <label>
//                       <input
//                         type="radio"
//                         name="rdLang"
//                         value="en"
//                         onChange={this.onHandleChange}
//                         checked={this.state.rdLang === "en"}
//                       />
//                       Tiếng Anh
//                     </label><br />
//                     <label>
//                       <input
//                         type="radio"
//                         name="rdLang"
//                         value="vi"
//                         onChange={this.onHandleChange}
//                         checked={this.state.rdLang === "vi"}
//                       />
//                       Tiếng Việt
//                     </label>
//                   </div>
//                   <div className="checkbox">
//                     <label>
//                       <input
//                         type="checkbox"
//                         name="chkbStatus"
//                         value={true}
//                         onChange={this.onHandleChange}
//                         checked={this.state.chkbStatus === true}
//                       />
//                       Trạng Thái
//                     </label>
//                   </div>
//                   <button type="submit" className="btn btn-primary">Lưu Lại</button>&nbsp;
//                   <button type="reset" className="btn btn-default">Xoá Trắng</button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default App;
// Installed: npx create-react-app my-app && bootstrap 3.3.7 & jquery 3.2.1

// --------------------------------------------------------------------------------------------------------------
// Solving array by hand

// import React from 'react';
// import './App.css';
// import TaskForm from './components/TaskForm';
// import TaskControl from './components/TaskControl';
// import TaskList from './components/TaskList';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tasks: [], //id: unique, name, status
//       isDisplayForm: false,
//       taskEditing: null,
//       filter: {
//         name: '',
//         status: -1
//       },
//       keyword: '',
//       sortBy: 'name',
//       sortValue: 1
//     };
//   }

//   UNSAFE_componentWillMount() {
//     if (localStorage && localStorage.getItem('tasks')) {
//       var tasks = JSON.parse(localStorage.getItem('tasks'));
//       this.setState({
//         tasks: tasks
//       })
//     }
//   }

//   s4() {
//     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
//   }

//   generateID() {
//     return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
//   }

//   onToggleForm = () => { // Thêm Task
//     if (this.state.isDisplayForm && this.state.taskEditing !== null) {
//       this.setState({
//         isDisplayForm: true,
//         taskEditing: null
//       });
//     } else {
//       this.setState({
//         isDisplayForm: !this.state.isDisplayForm,
//         taskEditing: null
//       });
//     }
//   }

//   onCloseForm = () => {
//     this.setState({
//       isDisplayForm: false
//     })
//   }

//   onShowForm = () => {
//     this.setState({
//       isDisplayForm: true
//     })
//   }

//   onSubmit = (data) => {
//     var { tasks } = this.state; // tasks = this.state.tasks
//     if (data.id === '') {
//       data.id = this.generateID();
//       tasks.push(data);
//     } else {
//       //Editing
//       var index = this.findIndex(data.id);
//       tasks[index] = data;
//     }
//     this.setState({
//       tasks: tasks,
//       taskEditing: null
//     });
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }

//   onUpdateStatus = (id) => {
//     var { tasks } = this.state;
//     var index = this.findIndex(id);
//     if (index !== -1) {
//       tasks[index].status = !tasks[index].status
//       this.setState({
//         tasks: tasks
//       });
//       localStorage.setItem('tasks', JSON.stringify(tasks));
//     }
//   }

//   findIndex = (id) => {
//     var { tasks } = this.state;
//     var result = -1;
//     tasks.forEach((task, index) => {
//       if (task.id === id) {
//         return result = index;
//       }
//     });
//     return result;
//   }

//   onDelete = (id) => {
//     var { tasks } = this.state;
//     var index = this.findIndex(id);
//     if (index !== -1) {
//       tasks.splice(index, 1)
//       this.setState({
//         tasks: tasks
//       });
//       localStorage.setItem('tasks', JSON.stringify(tasks));
//     }
//     this.onCloseForm();
//   }

//   onUpdate = (id) => {
//     var { tasks } = this.state;
//     var index = this.findIndex(id);
//     var taskEditing = tasks[index];
//     this.setState({
//       taskEditing: taskEditing
//     })
//     this.onShowForm();
//   }

//   onFilter = (filterName, filterStatus) => {
//     filterStatus = parseInt(filterStatus, 10)
//     this.setState({
//       filter: {
//         name: filterName.toLowerCase(),
//         status: filterStatus
//       }
//     })
//   }

//   onSearch = (keyword) => {
//     this.setState({
//       keyword: keyword.toLowerCase()
//     })
//   }

//   onSort = (sortBy, sortValue) => {
//     this.setState({
//       sortBy: sortBy,
//       sortValue: sortValue
//     })
//   }

//   render() {
//     var {
//       tasks,
//       isDisplayForm,
//       taskEditing,
//       filter,
//       keyword,
//       sortBy,
//       sortValue
//     } = this.state; // var tasks = this.state.tasks

//     if (filter) {
//       if (filter.name) {
//         tasks = tasks.filter((task) => {
//           return task.name.toLowerCase().indexOf(filter.name) !== -1;
//         });
//       }
//       tasks = tasks.filter((task) => {
//         if (filter.status === -1) {
//           return task;
//         } else {
//           return task.status === (filter.status === 1 ? true : false);
//         }
//       });
//     }

//     if (keyword) {
//       tasks = tasks.filter((task) => {
//         return task.name.toLowerCase().indexOf(keyword) !== -1;
//       });
//     }

//     if (sortBy === 'name') {
//       tasks.sort((a, b) => {
//         if (a.name > b.name) return sortValue;
//         else if (a.name < b.name) return -sortValue;
//         else return 0;
//       });
//     } else {
//       tasks.sort((a, b) => {
//         if (a.status > b.status) return -sortValue;
//         else if (a.status < b.status) return sortValue;
//         else return 0;
//       });
//     }

//     var elmTaskForm = isDisplayForm
//       ? <TaskForm
//         onSubmit={this.onSubmit}
//         onCloseForm={this.onCloseForm}
//         task={taskEditing}
//       />
//       : '';

//     return (
//       <div className="container">
//         <div className="text-center">
//           <h1>Quản Lý Công Việc</h1>
//           <hr />
//         </div>
//         <div className="row">
//           <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''}>
//             {/* Form */}
//             {elmTaskForm}
//           </div>
//           <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
//             <button
//               type="button"
//               className="btn btn-primary"
//               onClick={this.onToggleForm}
//             >
//               <span className="fa fa-plus mr-5"></span>Thêm Công Việc
//             </button>
//             {/* Search - Sort */}
//             <TaskControl
//               onSearch={this.onSearch}
//               onSort={this.onSort}
//               sortBy={sortBy}
//               sortValue={sortValue}
//             />
//             {/* List */}
//             <div className="row mt-15">
//               <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
//                 <TaskList
//                   tasks={tasks}
//                   onUpdateStatus={this.onUpdateStatus}
//                   onDelete={this.onDelete}
//                   onUpdate={this.onUpdate}
//                   onFilter={this.onFilter}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default App;

// Components of folder components
// Installed: npx create-react-app my-app 
// && bootstrap 3.3.7 
// && jquery 3.2.1 
// && font-awesome 4.7.0

// --------------------------------------------------------------------------------------------------------------
// Solving array by third library && training redux

// import React from 'react';
// import './App.css';
// import TaskForm from './components/TaskForm';
// import TaskControl from './components/TaskControl';
// import TaskList from './components/TaskList';
// import { findIndex } from 'lodash'; // saving resource
// // import { findIndex, filter } from 'lodash'; // saving resource
// import _ from 'lodash'; //use all of library (waste resource)
// import training_demo from './reduxs/training_demo';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tasks: [], //id: unique, name, status
//       isDisplayForm: false,
//       taskEditing: null,
//       filter: {
//         name: '',
//         status: -1
//       },
//       keyword: '',
//       sortBy: 'name',
//       sortValue: 1
//     };
//   }

//   UNSAFE_componentWillMount() {
//     if (localStorage && localStorage.getItem('tasks')) {
//       var tasks = JSON.parse(localStorage.getItem('tasks'));
//       this.setState({
//         tasks: tasks
//       })
//     }
//   }

//   s4() {
//     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
//   }

//   generateID() {
//     return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
//   }

//   onToggleForm = () => { // Thêm Task
//     if (this.state.isDisplayForm && this.state.taskEditing !== null) {
//       this.setState({
//         isDisplayForm: true,
//         taskEditing: null
//       });
//     } else {
//       this.setState({
//         isDisplayForm: !this.state.isDisplayForm,
//         taskEditing: null
//       });
//     }
//   }

//   onCloseForm = () => {
//     this.setState({
//       isDisplayForm: false
//     })
//   }

//   onShowForm = () => {
//     this.setState({
//       isDisplayForm: true
//     })
//   }

//   onSubmit = (data) => {
//     var { tasks } = this.state; // tasks = this.state.tasks
//     if (data.id === '') {
//       data.id = this.generateID();
//       tasks.push(data);
//     } else {
//       //Editing
//       var index = this.findIndex(data.id);
//       tasks[index] = data;
//     }
//     this.setState({
//       tasks: tasks,
//       taskEditing: null
//     });
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }

//   onUpdateStatus = (id) => {
//     var { tasks } = this.state;
//     // var index = this.findIndex(id); // by hand
//     // var index = _.findIndex(tasks, (task) => { // use _
//     //   return task.id === id;
//     // });
//     var index = findIndex(tasks, (task) => { // use findIndex of lodash
//       return task.id === id;
//     });
//     if (index !== -1) {
//       tasks[index].status = !tasks[index].status
//       this.setState({
//         tasks: tasks
//       });
//       localStorage.setItem('tasks', JSON.stringify(tasks));
//     }
//   }

//   findIndex = (id) => {
//     var { tasks } = this.state;
//     var result = -1;
//     tasks.forEach((task, index) => {
//       if (task.id === id) {
//         return result = index;
//       }
//     });
//     return result;
//   }

//   onDelete = (id) => {
//     var { tasks } = this.state;
//     var index = this.findIndex(id);
//     if (index !== -1) {
//       tasks.splice(index, 1)
//       this.setState({
//         tasks: tasks
//       });
//       localStorage.setItem('tasks', JSON.stringify(tasks));
//     }
//     this.onCloseForm();
//   }

//   onUpdate = (id) => {
//     var { tasks } = this.state;
//     var index = this.findIndex(id);
//     var taskEditing = tasks[index];
//     this.setState({
//       taskEditing: taskEditing
//     })
//     this.onShowForm();
//   }

//   onFilter = (filterName, filterStatus) => {
//     filterStatus = parseInt(filterStatus, 10)
//     this.setState({
//       filter: {
//         name: filterName.toLowerCase(),
//         status: filterStatus
//       }
//     })
//   }

//   onSearch = (keyword) => {
//     this.setState({
//       keyword: keyword.toLowerCase()
//     })
//   }

//   onSort = (sortBy, sortValue) => {
//     this.setState({
//       sortBy: sortBy,
//       sortValue: sortValue
//     })
//   }

//   render() {
//     var {
//       tasks,
//       isDisplayForm,
//       taskEditing,
//       filter,
//       keyword,
//       sortBy,
//       sortValue
//     } = this.state; // var tasks = this.state.tasks

//     if (filter) {
//       if (filter.name) {
//         tasks = tasks.filter((task) => {
//           return task.name.toLowerCase().indexOf(filter.name) !== -1;
//         });
//       }
//       tasks = tasks.filter((task) => {
//         if (filter.status === -1) {
//           return task;
//         } else {
//           return task.status === (filter.status === 1 ? true : false);
//         }
//       });
//     }

//     // if (keyword) { // by hand
//     //   tasks = tasks.filter((task) => {
//     //     return task.name.toLowerCase().indexOf(keyword) !== -1;
//     //   });
//     // }
//     tasks = _.filter(tasks, (task) => { // use _
//       return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
//     });
//     // tasks = filter(tasks, (task) => { // use filter of lodash // failed: trùng với filter ở render var filter
//     //   return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
//     // });

//     if (sortBy === 'name') {
//       tasks.sort((a, b) => {
//         if (a.name > b.name) return sortValue;
//         else if (a.name < b.name) return -sortValue;
//         else return 0;
//       });
//     } else {
//       tasks.sort((a, b) => {
//         if (a.status > b.status) return -sortValue;
//         else if (a.status < b.status) return sortValue;
//         else return 0;
//       });
//     }

//     var elmTaskForm = isDisplayForm
//       ? <TaskForm
//         onSubmit={this.onSubmit}
//         onCloseForm={this.onCloseForm}
//         task={taskEditing}
//       />
//       : '';

//     return (
//       <div className="container">
//         <div className="text-center">
//           <h1>Quản Lý Công Việc</h1>
//           <hr />
//         </div>
//         <div className="row">
//           <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''}>
//             {/* Form */}
//             {elmTaskForm}
//           </div>
//           <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
//             <button
//               type="button"
//               className="btn btn-primary"
//               onClick={this.onToggleForm}
//             >
//               <span className="fa fa-plus mr-5"></span>Thêm Công Việc
//             </button>
//             {/* Search - Sort */}
//             <TaskControl
//               onSearch={this.onSearch}
//               onSort={this.onSort}
//               sortBy={sortBy}
//               sortValue={sortValue}
//             />
//             {/* List */}
//             <div className="row mt-15">
//               <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
//                 <TaskList
//                   tasks={tasks}
//                   onUpdateStatus={this.onUpdateStatus}
//                   onDelete={this.onDelete}
//                   onUpdate={this.onUpdate}
//                   onFilter={this.onFilter}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default App;

// Components of folder components + folder reduxs
// Installed: npx create-react-app my-app 
// && bootstrap 3.3.7 
// && jquery 3.2.1 
// && font-awesome 4.7.0 
// && npm install lodash --save
// && npm install redux --save

// --------------------------------------------------------------------------------------------------------------
// Solving array by hand + redux

// import React from 'react';
// import './App.css';
// import TaskForm from './components/TaskForm';
// import TaskControl from './components/TaskControl';
// import TaskList from './components/TaskList';
// import { connect } from 'react-redux';
// import * as actions from './redux/actions/index';

// class App extends React.Component {
//   // toggle redux
//   onToggleForm = () => { // Thêm Task
//     var { itemEditing } = this.props;
//     if (itemEditing && itemEditing.id !== '') {
//       this.props.onOpenForm();
//     } else {
//       this.props.onToggleForm();
//     }
//     this.props.onClearTask({
//       id: '',
//       name: '',
//       status: false
//     });
//   }

//   render() {
//     var { isDisplayForm } = this.props;

//     return (
//       <div className="container">
//         <div className="text-center">
//           <h1>Quản Lý Công Việc</h1>
//           <hr />
//         </div>
//         <div className="row">
//           <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''}>
//             {/* Form */}
//             {/* {elmTaskForm} */}
//             <TaskForm />
//           </div>
//           <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
//             <button
//               type="button"
//               className="btn btn-primary"
//               onClick={this.onToggleForm}
//             >
//               <span className="fa fa-plus mr-5"></span>Thêm Công Việc
//             </button>
//             {/* Search - Sort */}
//             <TaskControl />
//             {/* List */}
//             <div className="row mt-15">
//               <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
//                 <TaskList />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     isDisplayForm: state.isDisplayForm,
//     itemEditing: state.itemEditing
//   };
// };

// const mapDispatchToProps = (dispatch, props) => {
//   return {
//     onToggleForm: () => {
//       dispatch(actions.toggleForm());
//     },
//     onClearTask: (task) => {
//       dispatch(actions.editTask(task));
//     },
//     onOpenForm: () => {
//       dispatch(actions.openForm());
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

// Components of folder components + folder reduxs
// Installed: npx create-react-app my-app 
// && bootstrap 3.3.7 
// && jquery 3.2.1 
// && font-awesome 4.7.0
// && npm install redux react-redux --save

// --------------------------------------------------------------------------------------------------------------

import React from 'react';
import Menu from './component/Menu';
import routes from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Menu */}
          <Menu />
          {/* Nội dung */}
          <Switch>
            {this.showContentMenus(routes)}
          </Switch>
        </div>
      </Router>
    );
  }

  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  }

}

export default App;

// Component: Home.js + About.js + Contact.js + NotFound.js + Menu.js + Products.js + ProductItem.js + Login.js + (routes.js ở src) 
// Installed: npx create-react-app my-app && bootstrap 3.3.7 && jquery 3.2.1 && react-router-dom

// --------------------------------------------------------------------------------------------------------------