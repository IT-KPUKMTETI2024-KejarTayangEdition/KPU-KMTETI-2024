export default function CardView(props) {
  return (
    <div className={`${ props.className } border-2 p-2 border-secondary-darkred rounded-2xl bg-gradient-to-b from-primary-light to-primary-dark`}>
        <div className="text-justify text-secondary-darkred p-2 border w-full h-full border-secondary-darkred rounded-xl">
            {props.text}
        </div>
    </div>
  )
}
