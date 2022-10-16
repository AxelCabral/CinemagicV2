import './App.css'
import '../../index.css';

type CartazProps = {
        text: string;
}

function Cartaz(props: CartazProps) {
    const style = {
        backgroundImage: `url(${props.text})`
    };
  return (
        <div className='cartaz' style={style}>
        </div>
  )
}

export default Cartaz
