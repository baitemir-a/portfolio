import Banner from "../../components/banner/Banner"
import Form from "../../components/form/Form"

type Props = {}

export default function Contact({}: Props) {
  return (
    <div>
      <Banner title="CONTACT" miniTitle="let's work together  "/>
      <Form/>
    </div>
  )
}