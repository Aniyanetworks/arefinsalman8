import { Routes, Route } from 'react-router-dom'
import { Nav }             from './components/Nav'
import { Footer }          from './components/Footer'
import { DonateProvider }  from './components/DonateModal'
import { Home }            from './pages/Home'
import { ActionPlan }      from './pages/ActionPlan'
import { MyStory }         from './pages/MyStory'
import { Donate }          from './pages/Donate'

export default function App() {
  return (
    <DonateProvider>
      <Nav />
      <main id="main-content">
        <Routes>
          <Route path="/"            element={<Home />}       />
          <Route path="/action-plan" element={<ActionPlan />} />
          <Route path="/my-story"    element={<MyStory />}    />
          <Route path="/donate"      element={<Donate />}     />
          {/* Fallback */}
          <Route path="*"            element={<Home />}       />
        </Routes>
      </main>
      <Footer />
    </DonateProvider>
  )
}
