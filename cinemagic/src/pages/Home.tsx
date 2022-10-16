import React, { useState, useEffect } from 'react';

import '../index.css';
import Cartaz from '../components/cartaz/Cartaz';

export default function Home() {
  
    return (
            <div className="corpo-home">
                <div className="card bg-dark">
                    <Cartaz text = "https://br.web.img3.acsta.net/pictures/22/09/08/09/16/4886164.jpg" />
                    <Cartaz text = "https://portalpopline.com.br/wp-content/uploads/2022/10/poster-pantera-negra-1.jpg" />
                    <Cartaz text = "https://pipocanamadrugada.com.br/site/wp-content/uploads/2022/05/Avatar-O-Caminho-da-Agua.jpg" />
                </div>
                <div className="chamada"> 
                </div>
            </div>
    );

}