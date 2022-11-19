import '../../index.css';
import Cartaz from './cartaz/Cartaz';
import { movieApi } from '../../lib/axios';

interface HomeProps {
    movieId?: string,
    movieTitle?: string,
    movieRD?: Date,
    movieLIM?: number,
    movieURL?: string
}

export const getServerSideProps = async () => {
	try {
		const response = await movieApi.get("/movies");
		
	}
	catch (error) {
		console.log(error);
	}
}

export default function Home(props: HomeProps) {
    getServerSideProps()
    return (
            <div className="corpo-home">
                <div className="card bg-dark">
                    <h1></h1><Cartaz text = {""}/>
                    <Cartaz text = "https://portalpopline.com.br/wp-content/uploads/2022/10/poster-pantera-negra-1.jpg" />
                    <Cartaz text = "https://pipocanamadrugada.com.br/site/wp-content/uploads/2022/05/Avatar-O-Caminho-da-Agua.jpg" />
                </div>
                <div className="chamada"> 
                </div>
            </div>
    );

}