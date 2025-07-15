import React from 'react';
//import articleImg from '../../assets/images/logo.jpg'
import './style.css'

export function Article({title, provider, description, thumbnail, url}){
    return(
        <article id="article">
            <img src={thumbnail} alt="" />

            <div className="article-infos">
                <h2><a href={url}>{title}</a></h2>

                <h3>{provider}</h3>

                <p>{description}</p>
            </div>
        </article>
    );
}