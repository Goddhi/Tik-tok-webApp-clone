import React from "react";
import "./VideoFooter.css";


function VideoFooter({channel, description}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter-text">
        <h3>{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter-ticker">

          {/* <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>Hey Guysss</p>
              </>
            )}
          </Ticker> */}
        </div>
      </div>
      <img
        className="videoFooter-record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;