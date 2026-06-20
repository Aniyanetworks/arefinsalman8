import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero }               from '../components/Hero'
import { RootedInCommunity }  from '../components/RootedInCommunity'
import { ListeningTour }      from '../components/ListeningTour'
import { VideoSection }       from '../components/VideoSection'
import { DonateGetInvolved }  from '../components/DonateGetInvolved'

export function Home() {
  const location = useLocation()

  // Scroll to a section when navigating from another page
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo
    if (target) {
      setTimeout(() => {
        document.querySelector(`#${target}`)?.scrollIntoView({ behavior: 'smooth' })
      }, 350)
    } else {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <>
      <Hero />
      <RootedInCommunity />
      <ListeningTour />
      <VideoSection />
      <DonateGetInvolved />
    </>
  )
}
