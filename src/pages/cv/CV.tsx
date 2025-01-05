import Banner from "../../components/banner/Banner"
import CvRender from "../../components/cv-render/CvRender"
type Props = {}

export default function CV({}: Props) {

  return (
    <div>
        <Banner title="CV" miniTitle="my resume"/>
        <CvRender/>
    </div>
  )
}