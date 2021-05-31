import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

function SampleResult() {
	return (
		<Fade triggerOnce={true} direction="up" delay={1000}>
			<SampleResultSC>
				<h2>Sample Inputs</h2>

				<p>
					<strong>For Reliable News Title</strong>
					<p>
						<strong>Input:</strong> "FLYNN: Hillary Clinton, Big Woman on Campus - Breitbart"
					</p>
					<p>
						<strong>Result: </strong> "Reliable"
					</p>
				</p>
				<p>
					<strong>For Unreliable News Title</strong>
					<p>
						<strong>Input:</strong> "House Dem Aide: We Didn’t Even See Comey’s Letter Until Jason Chaffetz
						Tweeted It"
					</p>
					<p>
						<strong>Result: </strong> "Unreliable"
					</p>
				</p>
			</SampleResultSC>
		</Fade>
	);
}

const SampleResultSC = styled.div`
	text-align: justify;
	h2 {
		margin: 20px;
		color: #ff5252;
	}
	p {
		color: #2d2d2d;
		margin: 10px 20px;
	}
	p > strong {
		color: #3a3a3a;
	}
`;

export default SampleResult;
