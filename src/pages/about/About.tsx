import AboutComponent from "../../components/about/About"
import Avatar from "../../components/avatar/Avatar"
import Banner from "../../components/banner/Banner"
import Brief from "../../components/brief/Brief"
import Diploma from "../../components/diploma/Diploma"
import MiniTitle from "../../components/mini-title/MiniTitle"

type Props = {}

export default function About({}: Props) {
  return (
    <div>
        <Banner title="ABOUT" miniTitle="nice to meet you"/>
        <Brief/>
        <Avatar/>
        <AboutComponent/>
        <MiniTitle>diploma</MiniTitle>
        <Diploma/>
    </div>
  )
}