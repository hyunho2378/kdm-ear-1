import { color, font } from './tokens/web.js';
import Nav from './components/Nav.jsx';

import Hero from './sections/Hero.jsx';
import Context from './sections/Context.jsx';
import Overview from './sections/Overview.jsx';
import DeskResearch from './sections/DeskResearch.jsx';
import MarketGap from './sections/MarketGap.jsx';
import Persona from './sections/Persona.jsx';
import Journey from './sections/Journey.jsx';
import Insight from './sections/Insight.jsx';
import Solution from './sections/Solution.jsx';
import ActiveRest from './sections/ActiveRest.jsx';
import Differentiation from './sections/Differentiation.jsx';
import Prototype from './sections/Prototype.jsx';
import Validation from './sections/Validation.jsx';
import Outro from './sections/Outro.jsx';

// 단일 스크롤 스택. EAR_PROJECT.md 섹션 순서 = 멘토링 방어 순서.
export default function App() {
  return (
    <div
      style={{
        background: color.bg,
        fontFamily: font.family,
        fontWeight: 500,
        minHeight: '100vh',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        wordBreak: 'keep-all',
        overflowWrap: 'break-word',
      }}
    >
      <Nav />
      <main>
        <Hero />
        <Context />
        <Overview />
        <DeskResearch />
        <MarketGap />
        <Persona />
        <Journey />
        <Insight />
        <Solution />
        <ActiveRest />
        <Differentiation />
        <Prototype />
        <Validation />
        <Outro />
      </main>
    </div>
  );
}
