import Banner from "../../components/banner/Banner"
import Brief from "../../components/brief/Brief"

type Props = {}

export default function Home({}: Props) {
  return (
    <div>
        <Banner title="PORTFOLIO" miniTitle="software development "/>
        <Brief/>
    </div>
  )
}