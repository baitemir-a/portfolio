import MiniTitle from "../../components/mini-title/MiniTitle";
import ProjectInfo from "../../components/project-info/ProjectInfo";
import Stack from "../../components/stack/Stack";
type Props = {};

export default function Project({}: Props) {

  return (
    <div>
      <ProjectInfo />

      <MiniTitle>stack</MiniTitle>
      <Stack/>
    </div>
  );
}
