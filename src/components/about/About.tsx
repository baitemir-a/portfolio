import styles from "./About.module.scss";
type Props = {};

export default function AboutComponent({}: Props) {
  return (
    <div className={styles.About}>
      <p>
        I’m a product designer currently based in Birmingham, UK. A physicist
        turned designer, and yes, I did quantum physics and specialised in
        electronics and IT applications. For a long time, I have been interested
        in interaction with motion, and so I delved into{" "}
      </p>
      <p>
        Invision. I then realised that what makes the feeling of using a product
        whole is the experience and not just the motion.
      </p>
    </div>
  );
}
