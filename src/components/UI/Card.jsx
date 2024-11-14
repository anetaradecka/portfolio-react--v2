export default function Card({header, children}) {
    return (
      <div className="features__feature">
        <h5 className="features__header">{header}</h5>
       {children}
      </div>
    );
}