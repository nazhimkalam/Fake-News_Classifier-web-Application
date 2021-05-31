import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import { useState } from 'react';

function Detector() {
	const [input, setInput] = useState('');
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState(null);

	const onHandleDetect = async (e) => {
		e.preventDefault();
		setLoading(true);

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message: input }),
		};

		await fetch('https://fake-new-classifier-nlp.herokuapp.com/predict', requestOptions)
			.then((response) => response.json())
			.then((result) => setResult(result.Prediction));

		setLoading(false);
	};

	return (
		<Fade triggerOnce={true} direction="left">
			<DetectorSC>
				<h2>Detector</h2>
				<form onSubmit={onHandleDetect}>
					<textarea
						placeholder="Enter New Heading . . ."
						cols="30"
						value={input}
						rows="5"
						onChange={(e) => {
							setResult(null);
							e.target.value = '' ? setInput('') : setInput(e.target.value);
						}}
					/>
					<button onClick={onHandleDetect}>DETECT</button>
					{input !== '' ? (
						loading ? (
							<p className="loading">PROCESSING THE RESULT . . .</p>
						) : (
							<p className={`${result?.toLowerCase()} reliable`}>{result?.toUpperCase()}</p>
						)
					) : (
						<p className="loading">PLEASE ENTER A NEWS HEADLINE TITLE</p>
					)}
				</form>
			</DetectorSC>
		</Fade>
	);
}
const DetectorSC = styled.div`
	text-align: justify;
	button {
		font-family: Poppins;
		background-color: #ff6666;
		outline: none;
		font-weight: bolder;
		color: #f7f7f7;
		border: 2px #ff6666 solid;
		cursor: pointer;
	}
	.loading {
		font-weight: bolder;
	}
	.reliable {
		color: #06aa22;
		margin: 5px;
		font-weight: bolder;
		font-size: 25px;
	}
	.unreliable {
		color: #d80202;
	}
	textarea {
		font-family: Poppins;
		padding: 8px;
		outline: none;
		border: 2px #ff8989 solid;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		resize: none;
	}
	p {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	h2 {
		margin: 20px;
		color: #ff5252;
	}
	form {
		margin: 20px;
		display: flex;

		flex-direction: column;
		justify-content: center;
	}
`;
export default Detector;
