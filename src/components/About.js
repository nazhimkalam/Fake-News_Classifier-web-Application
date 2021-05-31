import styled from 'styled-components';

function About() {
	return (
		<AboutSC>
			<p>
				SMS spam detection is an important task where spam SMS messages are identified and filtered. As more
				significant numbers of SMS messages are communicated every day, it is challenging for a user to remember
				and correlate the newer SMS messages received in context to previously received SMS. Thus, using the
				knowledge of artificial intelligence with the amalgamation of machine learning, and data mining we will
				try to develop web-based SMS text spam or ham detector.
			</p>
			<p>
				<strong>Spamtector</strong> will help to identify if the message is a <strong>spam</strong> or a{' '}
				<strong>ham</strong>
			</p>
		</AboutSC>
	);
}
const AboutSC = styled.div`
    text-align: justify;
	p {
		color: #2d2d2d;
		margin: 10px 20px;
	}
	p > strong {
		color: #5465ff;
	}
`;
export default About;
