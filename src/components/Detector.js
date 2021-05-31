import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

function Detector() {
	return (
		<Fade triggerOnce={true} direction="left" >
			<DetectorSC>
				<h2>Detector</h2>
				<form>
					<textarea cols="30" rows="5" />
					<button>DETECT</button>
					<p>RELIABLE</p>
				</form>
			</DetectorSC>
		</Fade>
	);
}
const DetectorSC = styled.div`
	text-align: justify;
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
