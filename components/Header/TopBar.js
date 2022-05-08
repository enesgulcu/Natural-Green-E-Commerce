//tailwind styled component
import {Section, Container, RightSide} from '../../styles/Header/topBar';
import Money from './Money.js'
import Language from './Language.js'

export default function TopBar() {
  return (
    <Section>
      <Container>
        <p className='text-sm text-center md:text-left md:text-lg'>Welcome to Ecomart in Your Dream Online Store!</p>
        <RightSide>
          <Language/>
          <span>|</span>
            <Money/>
        </RightSide>
      </Container>
    </Section>
  );
}