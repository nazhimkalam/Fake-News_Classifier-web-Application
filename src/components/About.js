import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

function About() {
	return (
		<Fade triggerOnce={true} direction="right" delay={500}>
			<AboutSC>
				<h2>About</h2>
				<p>
					News media has become a channel to pass on the information of what’s happening in the world to the
					people living. Often people perceive whatever conveyed in the news to be true. There were
					circumstances where even the news channels acknowledged that their news is not true as they wrote.
					But some news has a significant impact not only on the people or government but also on the economy.
					One news can shift the curves up and down depending on the emotions of people and political
					situation.
				</p>
				<p>
					It is important to identify the fake news from the real true news. The problem has been taken over
					and resolved with the help of Natural Language Processing tools which help us identify fake or true
					news based on historical data. The news is now in safe hands!
				</p>

				<p>
					<strong>FNC</strong> is a fake new classifier which will help to identify if the news title is{' '}
					<strong>reliable</strong> or <strong>unreliable</strong>
				</p>
			</AboutSC>
		</Fade>
	);
}
const AboutSC = styled.div`
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
		color: #ff5252;
	}
`;
export default About;
