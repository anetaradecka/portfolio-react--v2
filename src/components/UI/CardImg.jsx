// ------ IMAGES ---------
import digital from "../../assets/img/digital.jpg";
import digital_lazy from "../../assets/img/digital-lazy.jpg";
import grow from "../../assets/img/grow.jpg";
import grow_lazy from "../../assets/img/grow-lazy.jpg";
// ------ IMPORTS --------
import { useInView } from "react-intersection-observer";

export default function CardImg({img, alt}) {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  if (inView) {
    entry.target.src = entry.target.dataset.src;
    entry.target.classList.remove("lazy-img");
  }

  const imageSrc = img => img === 'digital' ? digital_lazy : grow_lazy;
  const imageDataSrc = (img) => (img === "digital" ? digital : grow);

  return (
    <img
      src={imageSrc(img)}
      data-src={imageDataSrc(img)}
      alt={alt}
      className="features__img lazy-img"
      ref={ref}
    />
  );
}
