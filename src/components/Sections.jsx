import { useInView } from "react-intersection-observer";

export default function Section({ id, title, header, children }) {
    const { ref, inView, entry } = useInView({
      threshold: 0.15,
    });

    if(inView) {
         entry.target.classList.remove("section--hidden");
    }

  return (
    <section className="section section--hidden" id={`section--${id}`} ref={ref}>
      <div className="section__title">
        <h2 className="section__description">{`${id
          .toString()
          .padStart(2, "0")}. ${title}`}</h2>
        <h3 className="section__header">{header}</h3>
      </div>
      {children}
    </section>
  );
}
