import { useState } from 'react';
import Datas from './Datas';
import './App.css';

const task = [];
let id = -1;

function App() {
	const d = new Date();
	const [Data, setData] = useState(task);
	const Add = (event) => {
		event.preventDefault();
		id = id + 1;
		const msg = event.target.form.add.value;
		const pushdata = {
			id: id,
			msg: msg,
			date: `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`,
			time: `${d.getHours()}:${d.getMinutes()}`
		};

		setData([...Data, pushdata]);
		event.target.form.add.value = '';
	};
	return (
		<div className='App'>
			<form>
				<input type='text' name='add' className='input' />
				<input type='submit' value='Add Event' onClick={Add} />
			</form>
			<div className='task'>
				<Datas data={Data} />
			</div>
		</div>
	);
}

export default App;
