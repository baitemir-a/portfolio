import { Link, useParams } from "react-router-dom";
import Banner from "../banner/Banner"
import styles from "./ProjectInfo.module.scss"
type Props = {}

export default function ProjectInfo({}: Props) {
    const params = useParams<{ id: string }>();
  return (
    <div className={styles.ProjectInfo}>
        <Banner
        title={`Project ${params.id}`}
        miniTitle={
          <>
            <Link to={"/"}>view site</Link>
            <Link to={"/"}>source code</Link>
          </>
        }
      ></Banner>
      <p className={styles.brief}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        unde, cupiditate obcaecati dolorum porro reiciendis tenetur minus
        aliquam provident! Obcaecati ratione aliquam placeat sed voluptatum
        itaque tempora doloremque asperiores impedit? Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Recusandae necessitatibus perferendis
        commodi eius. Quibusdam adipisci veniam recusandae perferendis a laborum
        accusamus nesciunt fugiat exercitationem rerum? Eos repellat in nobis
        error.
      </p>
      <img
        alt="project img"
        src="https://fakinstudio.com/storage/6/responsive-images/hQC00JJB2PmFvyjBRIwMoC3uPWTuDlzgL0bPnZZ6___webp_1748_1094.webp"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        eaque voluptates ratione dignissimos harum mollitia inventore commodi,
        voluptate expedita optio, dolore aperiam vel pariatur tempora deleniti,
        consectetur sit accusantium illo qui. Aut quidem autem harum nam
        sapiente vitae quaerat voluptatem. Cum illo magni sapiente, laudantium,
        inventore nisi maxime commodi assumenda culpa placeat nihil architecto
        perferendis recusandae adipisci repellendus incidunt molestiae! Possimus
        eligendi, obcaecati quos eos voluptatibus tempora dolor, laudantium
        blanditiis assumenda reprehenderit maiores itaque asperiores earum
        placeat, laborum hic ratione quaerat provident distinctio iste. Facilis
        fugiat impedit nam voluptate quasi eos sapiente animi aliquid, non,
        delectus fugit! Accusantium, labore debitis!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
        repudiandae mollitia est dignissimos maxime eaque. Autem quos cum
        necessitatibus dolores dolorem eum est iusto quae! Accusamus ad autem,
        animi vitae repellendus vero sequi, provident nemo molestias totam,
        nobis voluptatem rem laudantium earum expedita itaque recusandae nisi
        non doloribus voluptas! Rerum?
      </p>
      <div className={styles.gallery}>
        <img
          alt="project img"
          src="https://fakinstudio.com/storage/6/responsive-images/hQC00JJB2PmFvyjBRIwMoC3uPWTuDlzgL0bPnZZ6___webp_1748_1094.webp"
        />
        <img
          alt="project img"
          src="https://fakinstudio.com/storage/6/responsive-images/hQC00JJB2PmFvyjBRIwMoC3uPWTuDlzgL0bPnZZ6___webp_1748_1094.webp"
        />
        <img
          alt="project img"
          src="https://fakinstudio.com/storage/6/responsive-images/hQC00JJB2PmFvyjBRIwMoC3uPWTuDlzgL0bPnZZ6___webp_1748_1094.webp"
        />
      </div>
    </div>
  )
}