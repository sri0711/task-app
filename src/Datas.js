import './datas.css';

function Datas(props) {
	const editFunc = (event) => {
		const data = event;
		const h1 = document.getElementById(`ms${data}`);
		const frm = document.getElementById(`fr${data}`);
		h1.style = 'display:none;';
		frm.style = 'display:flex;';
	};
	const delFunc = (event) => {
		const data = event;
		const index = props.data[data];
		props.data.splice(index, data);
		const temp = document.getElementById(`el${data}`);
		temp.remove();
	};

	return (
		<div className='render'>
			{props.data.map((task) => (
				<div className='main' id={`el${task.id}`}>
					<div>
						<div className='msg'>
							<h1>{task.id}</h1>
							<h1 id={`ms${task.id}`}>{task.msg}</h1>
							<form style={{ display: 'none' }} id={`fr${task.id}`}>
								<input
									type='text'
									name='emsg'
									style={{ width: '400px' }}
								/>
								<input
									type='button'
									value='save'
									onClick={(event) => {
										event.preventDefault();
										const edmsg = event.target.form.emsg.value;
										const h1msg = document.getElementById(
											`ms${task.id}`
										);
										if (
											edmsg === null ||
											edmsg === undefined ||
											edmsg === ''
										) {
											alert('Please Enter Valid Take Name for Edit');
										} else {
											h1msg.innerText = edmsg;
											h1msg.style = 'display:flex';
											document.getElementById(`fr${task.id}`).style =
												'display:none';
										}
									}}
								/>
							</form>
						</div>
						<div className='time'>
							<p>{task.date}</p>
							<p>{task.time}</p>
						</div>
					</div>
					<div className='options'>
						<button
							onClick={() => {
								editFunc(task.id);
							}}
						>
							edit
						</button>
						<button
							onClick={() => {
								delFunc(task.id);
							}}
						>
							delete
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

export default Datas;
