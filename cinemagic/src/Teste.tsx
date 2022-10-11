import './App.css'
type TesteProps = {
  text: string;
}

function Teste(props: TesteProps) {
  return (
    <p>{props.text}</p>
  )
}

export default Teste
