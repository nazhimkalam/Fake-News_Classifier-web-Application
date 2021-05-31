import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

function Footer() {
	return (
		<Fade triggerOnce={true} direction="up">
			<FooterSC>@nazhimkalam</FooterSC>
		</Fade>
	);
}
const FooterSC = styled.div`
	margin: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: smaller;
	color: #ff5252;
`;
export default Footer;
