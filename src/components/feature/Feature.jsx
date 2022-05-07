import "./feature.css";
import React from 'react';
import {BsPlayFill} from "react-icons/bs";
import {GiInfo} from "react-icons/gi";


const Feature = ({type}) => {
  return (
    <div className="featured_info">
        {type && (
            <div className="category">
                <span>{type === "movie"?"Movies":"Series"}</span>
                <select name="genre" id="genre">
                <option >Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>

            </div>
        )}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNSL3VVimOqjZkK1-BDC2Wodw3QZcopzEVcg&usqp=CAU" alt="" />
        <div className="info">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEABYRezjq2Cyeqtzdzb-C6r0Z19MV720dHA&usqp=CAU" alt="" />
            <span><strong>Cast:</strong> Lateef Adedimeji, Omowumi Dada,Bimbo Manuel, Ade Laoye,Kunle Afolayan,Mr Macaroni.</span> <br />
            <p>Ayinla is one of the best Nigerian Yoruba movies that keeps viewers intrigued.It titled towards the remembrance of Ayinla Yusuf, an Apala musician during the 1970s and 1980s, and was directed by Tunde Kelani.The movie portrayed Ayinla(Lateef Adedimeji) as a man who developed a volatile temperament and became a philanderer at the pinnacle of his career.
                Ajala, a show promoter, offered to take him and his crew on tour to London as his music became top-notch. As the preparations for the London trip were going on, he slept with his manager's girlfriend, which brought about a fight between the two. Ayinla confronted his manager(Bayewu) in a bar, resulting in a fight. In the process, Ayinla was stabbed and killed by Bayewu.
            </p>
            <div className="btn">
                <button className="play">
                    <BsPlayFill className="play-icons"/>
                    <span>Play</span>
                </button>
                <button className="play">
                    <GiInfo className="play-icons"/>
                    <span>Info</span>
                </button>
            </div>
        </div>
        

    </div>
  )
}

export default Feature