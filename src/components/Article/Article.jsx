import React from 'react';
import articleImg from '../../assets/images/logo.jpg'
import './style.css'

export function Article({title, provider}){
    return(
        <article id="article">
            <img src={articleImg} alt="" />

            <div className="article-infos">
                <h2>{title}</h2>

                <h3>{provider}</h3>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Nobis aut reprehenderit quas officia, inventore iste expedita laborum 
                    impedit assumenda repellendus consectetur harum illo soluta ratione laudantium ipsa, 
                    enim reiciendis quidem!</p>
            </div>
        </article>
    );
}