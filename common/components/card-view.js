export default function CardView(props) {
  return (
    <div style={props.styleName} className={`${ props.className } border-2 p-2 border-secondary-darkred rounded-2xl bg-gradient-to-b from-primary-light to-primary-dark`}>
        <div className="text-secondary-darkred p-4 lg:p-10 border w-full h-full border-secondary-darkred rounded-xl">
            {props.text}
        </div>
    </div>
  )
}
