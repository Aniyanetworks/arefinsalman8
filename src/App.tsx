import { Routes, Route } from 'react-router-dom'
import { Nav }        from './components/Nav'
import { Footer }     from './components/Footer'
import { Home }       from './pages/Home'
import { ActionPlan } from './pages/ActionPlan'
import { MyStory }    from './pages/MyStory'

export default function App() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Routes>
          <Route path="/"            element={<Home />}       />
          <Route path="/action-plan" element={<ActionPlan />} />
          <Route path="/my-story"    element={<MyStory />}    />
          {/* Fallback */}
          <Route path="*"            element={<Home />}       />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
