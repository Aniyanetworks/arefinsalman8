import { Nav }          from './components/Nav'
import { Hero }         from './components/Hero'
import { About }        from './components/About'
import { Priorities }   from './components/Priorities'
import { Vision }       from './components/Vision'
import { VideoSection } from './components/VideoSection'
import { Donate }       from './components/Donate'
import { GetInvolved }  from './components/GetInvolved'
import { Footer }       from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <Priorities />
        <Vision />
        <VideoSection />
        <Donate />
        <GetInvolved />
      </main>
      <Footer />
    </>
  )
}
