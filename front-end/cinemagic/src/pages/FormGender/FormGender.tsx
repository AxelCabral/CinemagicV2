import '../../index.css';

export default function FormGender() {
  
    return (
            <div className="corpo-home">
                <div className="card bg-dark">
                 <form className='Form'>
                 <span>Gênero</span><input type="text" placeholder='Nome do Gênero' id="gender"/>
                 <button>Cadastrar</button>
                 </form>
                </div>
                <div className="chamada"> 
                </div>
            </div>
    );

}