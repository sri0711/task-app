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

		const msg = event.target.form.add.value;
		if (msg === null || msg === undefined || msg === '') {
			alert('please enter valid Task Name');
		} else {
			id = id + 1;
			const pushdata = {
				id: id,
				msg: msg,
				date: `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`,
				time: `${d.getHours()}:${d.getMinutes()}`
			};

			setData([...Data, pushdata]);
			event.target.form.add.value = '';
		}
	};
	return (
		<div className='App'>
			<form>
				<input
					type='text'
					name='add'
					placeholder='enter your event name'
					className='input'
				/>
				<input type='submit' value='Add Event' onClick={Add} />
			</form>
			<div className='task'>
				<Datas data={Data} />
			</div>
		</div>
	);
}

export default App;
