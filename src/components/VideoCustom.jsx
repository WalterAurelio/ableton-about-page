import { useState } from "react";
import { IoMdPlay } from "react-icons/io";

function VideoCustom() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className='video_container'>
      {
        !isClicked ? (
          <div onClick={() => { setIsClicked(true) }} className="thumbnail">
            <button onClick={() => { setIsClicked(true) }} className="play_button" type="button">
              <IoMdPlay />
            </button>
          </div>
        ) : (
          <iframe width="680" height="382" src="https://www.youtube.com/embed/9SbnhgjeyXA?si=t9C4UjOO6BUFN6aO&&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        )
      }

      <p className="video_description">Why Ableton - Juanpe Bolivar</p>
    </div>
  )
}

export default VideoCustom;