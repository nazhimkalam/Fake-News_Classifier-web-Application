import styled from 'styled-components';

function Header() {
	return (
		<HeaderSC>
			<h1>Spamtector</h1>
		</HeaderSC>
	);
}
const HeaderSC = styled.div`
	h1 {
		color: #5465ff;
	}
	margin: 00px 20px 20px 20px;
	padding: 20px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	/* border-bottom: 1px #BFD7FF solid; */
`;

export default Header;
