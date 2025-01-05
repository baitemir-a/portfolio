import styles from "./Diploma.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/swiper-bundle.css";
type Props = {};

export default function Diploma({}: Props) {
  return (
    <div className={styles.Diploma}>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={3000}
        freeMode={true}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      >
        <SwiperSlide className={styles.slide}>
          <img
            src="https://previews.123rf.com/images/kitipol/kitipol1609/kitipol160900031/63887241-vertical-certificate-template-diploma-letter-size-vector.jpg"
            alt="Work 1"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img
            src="https://previews.123rf.com/images/kitipol/kitipol1609/kitipol160900031/63887241-vertical-certificate-template-diploma-letter-size-vector.jpg"
            alt="Work 2"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img
            src="https://previews.123rf.com/images/kitipol/kitipol1609/kitipol160900031/63887241-vertical-certificate-template-diploma-letter-size-vector.jpg"
            alt="Work 3"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img
            src="https://previews.123rf.com/images/kitipol/kitipol1609/kitipol160900031/63887241-vertical-certificate-template-diploma-letter-size-vector.jpg"
            alt="Work 3"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img
            src="https://previews.123rf.com/images/kitipol/kitipol1609/kitipol160900031/63887241-vertical-certificate-template-diploma-letter-size-vector.jpg"
            alt="Work 3"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img
            src="https://previews.123rf.com/images/kitipol/kitipol1609/kitipol160900031/63887241-vertical-certificate-template-diploma-letter-size-vector.jpg"
            alt="Work 3"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img
            src="https://previews.123rf.com/images/kitipol/kitipol1609/kitipol160900031/63887241-vertical-certificate-template-diploma-letter-size-vector.jpg"
            alt="Work 3"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={3000}
        freeMode={true}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      >
        <SwiperSlide className={styles.slideh}>
          <img
            src="https://i.ebayimg.com/images/g/l3YAAOSw~dxfjdXF/s-l1200.jpg"
            alt="Work 1"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slideh}>
          <img
            src="https://i.ebayimg.com/images/g/l3YAAOSw~dxfjdXF/s-l1200.jpg"
            alt="Work 2"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slideh}>
          <img
            src="https://i.ebayimg.com/images/g/l3YAAOSw~dxfjdXF/s-l1200.jpg"
            alt="Work 3"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slideh}>
          <img
            src="https://i.ebayimg.com/images/g/l3YAAOSw~dxfjdXF/s-l1200.jpg"
            alt="Work 3"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slideh}>
          <img
            src="https://i.ebayimg.com/images/g/l3YAAOSw~dxfjdXF/s-l1200.jpg"
            alt="Work 3"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slideh}>
          <img
            src="https://i.ebayimg.com/images/g/l3YAAOSw~dxfjdXF/s-l1200.jpg"
            alt="Work 3"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slideh}>
          <img
            src="https://i.ebayimg.com/images/g/l3YAAOSw~dxfjdXF/s-l1200.jpg"
            alt="Work 3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
