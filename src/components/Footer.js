import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

function Footer() {
	return (
		<Fade triggerOnce={true} direction="up" delay={3000}>
			<FooterSC>
				<p>@nazhimkalam</p>
			</FooterSC>
		</Fade>
	);
}
const FooterSC = styled.div`
	p {
		font-size: smaller;
		color: #ff5252;
	}
`;
export default Footer;
