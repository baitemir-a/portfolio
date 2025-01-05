import About from "../../components/about/About"
import Avatar from "../../components/avatar/Avatar"
import Banner from "../../components/banner/Banner"
import Brief from "../../components/brief/Brief"
import MiniTitle from "../../components/mini-title/MiniTitle"
import WorksSlider from "../../components/works-slider/WorksSlider"

type Props = {}

export default function Home({}: Props) {
  return (
    <div>
        <Banner title="PORTFOLIO" miniTitle="software development "/>
        <Brief/>
        <MiniTitle>work</MiniTitle>
        <WorksSlider/>
        <MiniTitle>about</MiniTitle>
        <section className="home-about">
          <About/>
          <Avatar/>
        </section>
        
    </div>
  )
}