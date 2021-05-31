import styled from 'styled-components';

function Footer() {
	return (
		<FooterSC>
			<p>@nazhimkalam</p>
		</FooterSC>
	);
}
const FooterSC = styled.div`
	p {
		font-size: smaller;
		color: #5465ff;
	}
`;
export default Footer;
