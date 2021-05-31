import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

function UserGuide() {
	return (
		<Fade triggerOnce={true} direction="left" delay={1000}>
			<UserGuideSC>
				<h2>User Guide</h2>
				<p>
					Using the <strong>sample data</strong> given below with its output as an example, you are supposed
					to enter the <strong>Title of the News</strong> as the input for the text field and click the{' '}
					<strong>DETECT</strong> button in order to process the result to get an <strong>output</strong>
				</p>
			</UserGuideSC>
		</Fade>
	);
}

const UserGuideSC = styled.div`
	text-align: justify;

	h2 {
		margin: 10px 20px;
		color: #ff5252;
	}
	p {
		color: #2d2d2d;
		margin: 10px 20px;
	}
	p > strong {
		color: #ff5252;
	}
`;

export default UserGuide;
