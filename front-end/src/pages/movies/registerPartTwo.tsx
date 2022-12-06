import { movieApi } from '../../lib/axios';
import Footer from '../components/footer';
import Navbar from '../components/navBar';
import moment from 'moment';
import React, { useEffect, useRef, useState } from "react";
import swal from 'sweetalert';
import Router, { withRouter } from 'next/router'

interface MovieProps {
    movie: {
        map: any;
        id: string,
        title: string,
        releaseDate: string,
        lengthInMinutes: number,
        coverUrl: string,
        synopsis: string,
        parentalRatingType: string,
        dubbedVersion: Boolean,
        subtitledVersion: Boolean,
        originalLanguage: string,
    },
    gender: {
        map: any;
        id: string,
        name: string,
    }
}

function reload() {
    window.location.reload();
}

export const getServerSideProps = async (context: { query: { title: any; }; }) => {
    const { title } = context.query;
    const response = await movieApi.get("movie/registerTwo", {
        headers: {
            title: title,
        }
    });

    return {
        props: {
            movie: response.data.movie,
            gender: response.data.gender,
        }
    }
}


export const registerGender = async (genderID: string, movieID: string) => {

    try {
        const response = await movieApi.post("movie/newGender", {
            movieId: movieID,
            genderId: genderID,
        });

        swal("Sucesso!", response.data.message, "success", {
            timer: 2000,
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
        return reload();
    } catch (error) {
        console.log(error);
        swal("Falha!", "Falha ao inserir o gênero, tente novamente!", "error");
    }

}

export default function registerPartTwo(props: MovieProps) {
    return (
        <div className="main-container">
            <Navbar></Navbar>
            <section className="banner-container">
            </section>
            <main className="info-movie-container">
                <h2 className="movies-section-title info-title"></h2>
                {
                    <div key={props.movie.id} className="movie-info-main">
                        <div className="movie-info-banner"></div>
                        <img className="movie-info-img" src={props.movie.coverUrl} alt="Capa do filme" />
                        <div className="movie-info">
                            <div className='movie-info-desc synopsis'>
                                <h3 className="movie-synopsis">Sinopse</h3>
                                <p>{props.movie.synopsis}</p>
                            </div>
                            <div className='movie-info-desc minusInfo'>
                                <h3>Dublado</h3>
                                <p>{props.movie.dubbedVersion == true ? 'Sim' : props.movie.dubbedVersion == false ? 'Não' : props.movie.dubbedVersion == null}</p>
                            </div>
                            <div className='movie-info-desc minusInfo'>
                                <h3>Legendado</h3>
                                <p>{props.movie.subtitledVersion == true ? 'Sim' : props.movie.subtitledVersion == false ? 'Não' : props.movie.subtitledVersion == null}</p>
                            </div>
                            <div className='movie-info-desc minusInfo'>
                                <h3>Idioma Original</h3>
                                <p>{props.movie.originalLanguage}</p>
                            </div>
                            <div className='movie-info-desc minusInfo'>
                                <h3>Lançamento</h3>
                                <p>{moment(props.movie.releaseDate).format('DD/MM/YYYY')}</p>
                            </div>
                            <div className='movie-info-desc minusInfo'>
                                <h3>Duração</h3>
                                <p>{props.movie.lengthInMinutes} minutos</p>
                            </div>
                            <div className='movie-info-desc ratingInfo'>
                                <h3>Classificação Indicativa</h3>
                                <img className="movie-rating-img" src={
                                    props.movie.parentalRatingType == 'L' ? "https://cdn.discordapp.com/attachments/421737332073299978/1049184033046806548/665px-DJCTQ_-_L.png"
                                        : props.movie.parentalRatingType == '10' ? "https://cdn.discordapp.com/attachments/421737332073299978/1049184251091877908/1024px-DJCTQ_-_10.png"
                                            : props.movie.parentalRatingType == '12' ? "https://cdn.discordapp.com/attachments/421737332073299978/1049184304405688321/1024px-DJCTQ_-_12.png"
                                                : props.movie.parentalRatingType == '14' ? "https://cdn.discordapp.com/attachments/421737332073299978/1049184902618304582/1024px-DJCTQ_-_14.png"
                                                    : props.movie.parentalRatingType == '16' ? "https://cdn.discordapp.com/attachments/421737332073299978/1049184981915807884/1024px-DJCTQ_-_16.png"
                                                        : props.movie.parentalRatingType == '18' ? "https://cdn.discordapp.com/attachments/421737332073299978/1049185128921964574/400px-DJCTQ_-_18.png"
                                                            : props.movie.parentalRatingType
                                } />
                            </div>
                        </div>
                    </div>
                }
                <div className='movie-genders-container dropdown-g'>
                    <div className='movie-gender-dropdown'>
                        <h3>Gêneros</h3>
                    </div>
                    <div className="dropdown-container">
                        <div className="dropdown-input">
                            <div className="dropdown-menu">
                                {
                                    props.gender.map((gender: any) => (
                                        <div onClick={() => registerGender(gender.id, props.movie.id)} key={gender.id} className="dropdown-item">
                                            {gender.name}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )

}


