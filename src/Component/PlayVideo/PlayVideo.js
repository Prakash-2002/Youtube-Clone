import React from "react";
import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Video Title</h3>
      <div className="play-video-info">
        <p>1524 Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            125
          </span>
          <span>
            <img src={dislike} alt="" />2
          </span>
          <span>
            <img src={share} alt="" />
          </span>
          <span>
            <img src={save} alt="" />
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
            
          <p>ChannelName</p>
          <span>1M Subscriber</span>
        </div>
        
          <button>Subscribe</button>
        
      </div>

      <div className="vid-description">
        <p>Channel That Make Learning Easy </p>
        <p>Subscribe us to watch more video </p>
        <hr />
        <h3>130 Comments</h3>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Jack Nicholson <span>1 days ago</span></h3>
            <p>loream lipsum hjdv dauys ysgd aiugd aoiy aoue dg </p>
            <div className="comment-action">
                <img src={like} alt=""/>
                <span>244</span>
                <img src={dislike} alt=""/>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Jack Nicholson <span>1 days ago</span></h3>
            <p>loream lipsum hjdv dauys ysgd aiugd aoiy aoue dg </p>
            <div className="comment-action">
                <img src={like} alt=""/>
                <span>244</span>
                <img src={dislike} alt=""/>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Jack Nicholson <span>1 days ago</span></h3>
            <p>loream lipsum hjdv dauys ysgd aiugd aoiy aoue dg </p>
            <div className="comment-action">
                <img src={like} alt=""/>
                <span>244</span>
                <img src={dislike} alt=""/>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Jack Nicholson <span>1 days ago</span></h3>
            <p>loream lipsum hjdv dauys ysgd aiugd aoiy aoue dg </p>
            <div className="comment-action">
                <img src={like} alt=""/>
                <span>244</span>
                <img src={dislike} alt=""/>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Jack Nicholson <span>1 days ago</span></h3>
            <p>loream lipsum hjdv dauys ysgd aiugd aoiy aoue dg </p>
            <div className="comment-action">
                <img src={like} alt=""/>
                <span>244</span>
                <img src={dislike} alt=""/>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Jack Nicholson <span>1 days ago</span></h3>
            <p>loream lipsum hjdv dauys ysgd aiugd aoiy aoue dg </p>
            <div className="comment-action">
                <img src={like} alt=""/>
                <span>244</span>
                <img src={dislike} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
