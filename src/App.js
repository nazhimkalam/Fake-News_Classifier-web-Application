import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import UserGuide from './components/UserGuide';
import Detector from './components/Detector';
import SampleResult from './components/SampleResult';

function App() {
	return (
		<Container>
			<Header />
			<About />
			<UserGuide />
			<SampleResult />
			<Detector />
			<Footer />
		</Container>
	);
}

const Container = styled.div`
	font-family: Poppins;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
export default App;
