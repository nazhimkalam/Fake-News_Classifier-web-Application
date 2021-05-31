import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

function Detector() {
	return (
		<Fade triggerOnce={true} direction="left">
			<DetectorSC>
				<h2>Detector</h2>
				<form>
					<textarea placeholder="Enter New Heading . . ." cols="30" rows="5" />
					<button>DETECT</button>
					<p className="reliable">RELIABLE</p>
					<p className="unreliable reliable">UNRELIABLE</p>
					<p className="loading">PROCESSING THE RESULT . . .</p>
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
    .loading{
        font-weight: bolder;
    }
	.reliable {
		color: #06aa22;
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
