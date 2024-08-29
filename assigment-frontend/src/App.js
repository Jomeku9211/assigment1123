import logo from "./logo.svg";
import "./App.css";
// import AddEmployeeForm from './component/AddEmployeeForm';
import AddEmployee from "./component/AddEmployee";
import VerticalTree from "./component/Tree";

function App() {
	return (
		<div className="App">
			{/* <AddEmployeeForm /> */}
			<AddEmployee />
			<VerticalTree />
		</div>
	);
}

export default App;
