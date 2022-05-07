import "./list.css";
import React,{useState,useRef} from 'react';
import  {BsArrowLeftShort} from "react-icons/bs";
import {BsArrowRightShort} from "react-icons/bs";
import ListItem from "../listItem/ListItem";

const List = () => {
  const [isMoved,setIsMoved] = useState(false);
  const [slideNumber,setSlideNumber] = useState(0);
  const listRef = useRef();

  const handleClick = (direction)=>{
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x -50;
    if(direction === "left" && slideNumber > 0){
      setSlideNumber(slideNumber -1);
      listRef.current.style.transform = `translatex(${315 + distance}px)`;
    }
    if(direction === "right" && slideNumber < 6 ){
      setSlideNumber(slideNumber +1);
      listRef.current.style.transform = `translatex(${-240 + distance}px)`;
    }
  }
  return (
    <div className="list">
        <span className="listTitle">Continue to Watch</span>
        <div className="wrappers">
            <BsArrowLeftShort className="sliderArrow left" onClick ={ (()=> handleClick("left"))} 
            style= {{display: !isMoved && "none"}}/>

            <div className="containers" ref = {listRef}>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
          </div>
            <BsArrowRightShort className = "sliderArrow right" onClick ={ (()=> handleClick("right"))}/>

        </div>

        
    </div>
  )
}

export default List