export default function CTA({children, type}) {
  
    return(
        <button className={`cta cta--${type}`}>{children}</button>
    )
}