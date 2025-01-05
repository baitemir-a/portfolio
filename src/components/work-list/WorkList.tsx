import { Link } from "react-router-dom";
import styles from "./WorkList.module.scss";

type Props = {};

export default function WorkList({}: Props) {
  return (
    <div className={styles.WorkList}>
      <Link to="/work/1">
        <img
          src="https://fakinstudio.com/storage/6/responsive-images/hQC00JJB2PmFvyjBRIwMoC3uPWTuDlzgL0bPnZZ6___webp_1748_1094.webp"
          alt="work1"
        />
      </Link>
      <Link to="/work/2">
        <img
          src="https://fakinstudio.com/storage/5/responsive-images/L9Tn5zQShsbZetHCgPobD174eTxxdemVx7iophkb___webp_1748_1094.webp"
          alt="work2"
        />
      </Link>
      <Link to="/work/3">
        <img
          src="https://fakinstudio.com/storage/11/responsive-images/u9iFmNevD2woeNU5bColNGntoEqmqTaRSc3XtOor___webp_1748_1094.webp"
          alt="work3"
        />
      </Link>
    </div>
  );
}
