import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

function Header() {
	return (
		<Fade triggerOnce={true} direction="down">
			<HeaderSC>
				<h1>FNC</h1>
			</HeaderSC>
		</Fade>
	);
}
const HeaderSC = styled.div`
	h1 {
		color: #ff5252;
	}
	margin: 00px 20px 20px 20px;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	/* border-bottom: 1px #BFD7FF solid; */
`;

export default Header;
