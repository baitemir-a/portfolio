import Banner from "../../components/banner/Banner"
import WorkList from "../../components/work-list/WorkList"

type Props = {}

export default function Work({}: Props) {
  return (
    <div>
        <Banner title="WORK" miniTitle="my pieces of art"/>
        <WorkList/>
    </div>
  )
}