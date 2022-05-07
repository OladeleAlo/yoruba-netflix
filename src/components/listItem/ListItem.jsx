import "./listItem.css";
import React,{useState} from 'react';
import {FaPlay} from "react-icons/fa";
import {AiOutlinePlus} from "react-icons/ai";
import {AiFillLike,AiFillDislike} from "react-icons/ai";





const ListItem = ({index}) => {
    const [isHovered,setIsHovered] = useState(false);
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
   
  return (
    <div className="listItem"
    style = {{left:isHovered && index * 225 -50 + index * 2.5}}
    onMouseEnter = {()=>setIsHovered(true)}
    onMouseLeave = {()=>setIsHovered(false)}
    >      
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtY576EyB9luvbknb5cPlnxp06H2ekuxXvIw&usqp=CAU"
        alt="" 
        />
       
        <div className="itemInfo">
            <div className="icons">
                <FaPlay className="icon" />
                <AiOutlinePlus className="icon"/>
                <AiFillLike className="icon"/>
                <AiFillDislike className="icon"/>
            </div>
            <div className="itemInfoTop">
                <span>1 hour 15 mins</span>
                <span className="limit">+18</span>
                <span>2016</span>
            </div>
            <div className="desc">
                An epic yoruba movie. Coming to Netflix onJan 11
            </div>
            <div className="genre">Action</div>
        </div>
       
       
    </div>
  )
}

export default ListItem