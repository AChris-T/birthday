import DDday from "./DDday"
import { Footer } from "./Footer"
import LandingPage from "./LandingPage"
import Momemt from "./Momemt"

const Layout = () => {
  return (
    <div className="max-w-[1440px] overflow-hidden mx-auto">
      <LandingPage/>
      <DDday/>
      <Momemt/>
      <Footer/>
    </div>
  )
}

export default Layout
