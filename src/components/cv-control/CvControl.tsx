import styles from "./CvControl.module.scss";
type Props = {
    cv:string
};

export default function CvControl({cv}: Props) {
    const downloadPdf = () => {
        const link = document.createElement('a');
        link.href = cv;
        link.download = "baitemir-asanbaev.pdf";
        link.click();
      };
  return (
    <div className={styles.CvControl}>
      <button onClick={downloadPdf}>Download</button>
    </div>
  );
}
