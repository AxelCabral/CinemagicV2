import '../Cadastro/filmes.css'

export default function CadastroFilmes() {

    return (
        <><div className="container">
            <div className= "container-cadastro">
            <div className="wrap-cadastro">
        <form>
            <fieldset className='grupo'>
                <div className='campo'>
                    <label><strong>Nome</strong></label>
                    <input type='text' name='name' id='name' required></input>
                </div>

            </fieldset>

            <fieldset>
                <div className='campo'>
                    <label><strong>Genero</strong></label>
                    <input type='text' name='genero' id='genero' required></input>
                </div>
                
            </fieldset>
            <fieldset>
                <div className='campo'>
                    <label><strong>Estreia</strong></label>
                    <input type='date' name='Date' id='dataI' required></input>
                </div>
                
            </fieldset>
            <fieldset>
                <div className='campo'>
                    <label><strong>Encerramento</strong></label>
                    <input type='date' name='Date' id='dataF' required></input>
                </div>
                
            </fieldset>

            <div className='button'>
                <button className='Cadastrar'>Cadastrar</button>
            </div>

            </form>
                </div>
            </div> 
        </div></>
    )
}