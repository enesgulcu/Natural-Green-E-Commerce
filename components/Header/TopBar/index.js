//tailwind styled component
import {Section, Container, RightSide} from '../../../styles/Header/topBar';
import Money from './Money.js'
import Language from './Language.js'

export default function TopBar() {
  return (
    <Section className="z-10 relative">
      <Container>
        <p className='ml-4 hidden lg:block text-lg text-center'>Welcome to Ecomart in Your Dream Online Store!</p>
        <RightSide>
          <Language/>
          <span>|</span>
            <Money/>
        </RightSide>
      </Container>
    </Section>
  );
}