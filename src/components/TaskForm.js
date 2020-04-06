// import React from 'react';

// class TaskForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             id: '',
//             name: '',
//             status: false
//         }
//     }

//     UNSAFE_componentWillMount() {
//         if (this.props.task) {
//             this.setState({
//                 id: this.props.task.id,
//                 name: this.props.task.name,
//                 status: this.props.task.status
//             })
//         }
//     }

//     UNSAFE_componentWillReceiveProps(nextProps) {
//         if (nextProps && nextProps.task) {
//             this.setState({
//                 id: nextProps.task.id,
//                 name: nextProps.task.name,
//                 status: nextProps.task.status
//             })
//         } else if (!nextProps.task) { // else if (nextProps && nextProps.task === null)
//             this.setState({
//                 id: '',
//                 name: '',
//                 status: false
//             });
//         }
//     }

//     onCloseForm = () => {
//         this.props.onCloseForm();
//     }

//     onChange = (event) => {
//         var target = event.target;
//         var name = target.name;
//         var value = target.value;
//         // covert str to boolean with status
//         if (name === 'status') {
//             value = target.value === 'true' ? true : false;
//         }
//         this.setState({
//             [name]: value
//         })
//     }

//     onSubmit = (event) => {
//         event.preventDefault();
//         this.props.onSubmit(this.state);
//         // Cancel & Close Form
//         this.onClear();
//         this.onCloseForm();
//     }

//     onClear = () => {
//         this.setState({
//             name: '',
//             status: false
//         })
//     }

//     render() {
//         var { id } = this.state; // id = this.state.id;
//         return (
//             <div className="panel panel-warning">
//                 <div className="panel-heading">
//                     <h3 className="panel-title">
//                         {id !== '' ? 'Cập Nhật Công Việc' : 'Thêm Công Việc'}
//                         <span
//                             className='fa fa-times-circle text-right'
//                             onClick={this.onCloseForm}
//                         ></span>
//                     </h3>
//                 </div>
//                 <div className="panel-body">
//                     <form onSubmit={this.onSubmit}>
//                         <div className="form-group">
//                             <label>Tên :</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 name="name"
//                                 value={this.state.name}
//                                 onChange={this.onChange}
//                             />
//                         </div>
//                         <label>Trạng Thái :</label>
//                         <select
//                             className="form-control"
//                             name="status"
//                             value={this.state.status}
//                             onChange={this.onChange}
//                         >
//                             <option value={true}>Kích Hoạt</option>
//                             <option value={false}>Ẩn</option>
//                         </select>
//                         <br />
//                         <div className="text-center">
//                             <button type="submit" className="btn btn-warning">
//                                 <span className="fa fa-plus mr-5"></span>Lưu Lại
//                             </button>&nbsp;
//                             <button
//                                 type="button"
//                                 className="btn btn-danger"
//                                 onClick={this.onClear}
//                             >
//                                 <span className="fa fa-close mr-5"></span>Hủy Bỏ
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }

// export default TaskForm;

// Not Redux
//--------------------------------------------------------------------------------------------------------------

// import React from 'react';
// import { connect } from 'react-redux';
// import * as actions from './../redux/actions/index';

// class TaskForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             id: '',
//             name: '',
//             status: false
//         }
//     }

//     UNSAFE_componentWillMount() {
//         if (this.props.task) {
//             this.setState({
//                 id: this.props.task.id,
//                 name: this.props.task.name,
//                 status: this.props.task.status
//             })
//         }
//     }

//     UNSAFE_componentWillReceiveProps(nextProps) {
//         if (nextProps && nextProps.itemEditing) {
//             this.setState({
//                 id: nextProps.itemEditing.id,
//                 name: nextProps.itemEditing.name,
//                 status: nextProps.itemEditing.status
//             })
//         } else if (!nextProps.itemEditing) { // else if (nextProps && nextProps.itemEditing === null)
//             this.setState({
//                 id: '',
//                 name: '',
//                 status: false
//             });
//         }
//     }

//     onCloseForm = () => {
//         this.props.onCloseForm();
//     }

//     onChange = (event) => {
//         var target = event.target;
//         var name = target.name;
//         var value = target.value;
//         this.setState({
//             [name]: value
//         })
//     }

//     onSubmit = (event) => {
//         event.preventDefault();
//         // this.props.onSubmit(this.state);
//         this.props.onSaveTask(this.state);
//         // Cancel & Close Form
//         this.onClear();
//         this.onCloseForm();
//     }

//     onClear = () => {
//         this.setState({
//             name: '',
//             status: false
//         })
//     }

//     render() {
//         if (!this.props.isDisplayForm) return null;
//         var { id } = this.state; // id = this.state.id;
//         return (
//             <div className="panel panel-warning">
//                 <div className="panel-heading">
//                     <h3 className="panel-title">
//                         {id !== '' ? 'Cập Nhật Công Việc' : 'Thêm Công Việc'}
//                         <span
//                             className='fa fa-times-circle text-right'
//                             onClick={this.onCloseForm}
//                         ></span>
//                     </h3>
//                 </div>
//                 <div className="panel-body">
//                     <form onSubmit={this.onSubmit}>
//                         <div className="form-group">
//                             <label>Tên :</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 name="name"
//                                 value={this.state.name}
//                                 onChange={this.onChange}
//                             />
//                         </div>
//                         <label>Trạng Thái :</label>
//                         <select
//                             className="form-control"
//                             name="status"
//                             value={this.state.status}
//                             onChange={this.onChange}
//                         >
//                             <option value={true}>Kích Hoạt</option>
//                             <option value={false}>Ẩn</option>
//                         </select>
//                         <br />
//                         <div className="text-center">
//                             <button type="submit" className="btn btn-warning">
//                                 <span className="fa fa-plus mr-5"></span>Lưu Lại
//                             </button>&nbsp;
//                             <button
//                                 type="button"
//                                 className="btn btn-danger"
//                                 onClick={this.onClear}
//                             >
//                                 <span className="fa fa-close mr-5"></span>Hủy Bỏ
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         isDisplayForm: state.isDisplayForm,
//         itemEditing: state.itemEditing
//     }
// };

// const mapDispatchToProps = (dispatch, props) => {
//     return {
//         onSaveTask: (task) => {
//             dispatch(actions.saveTask(task));
//         },
//         onCloseForm: () => {
//           dispatch(actions.closeForm());
//         }
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);

// Have Redux
//--------------------------------------------------------------------------------------------------------------