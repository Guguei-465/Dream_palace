import React, { useState } from "react";

import myVideo from "../videos/sample.mp4";
import myVideo1 from "../videos/sample1.mp4";
import myVideo2 from "../videos/sample2.mp4";
import myVideo3 from "../videos/sample3.mp4";
import myVideo4 from "../videos/sample4.mp4";
import myVideo5 from "../videos/sample5.mp4";

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    { src: myVideo, title: "The view of room" },
    { src: myVideo1, title: "The view of the dream palace hotel" },
    { src: myVideo2, title: "The view of the conference house" },
    { src: myVideo3, title: "The stree view of dream palace" },
    { src: myVideo4, title: "the D.P bank view 24 hours" },
    { src: myVideo5, title: "Surroundings of Dream Palace" },
  ];

  return (
    <div className="container py-5">

      {/* HEADER */}
      <h5 className="text-center mb-4 fw-bold text-warning">
        Watch Dream Palace sample Videos for verious places
      </h5>

      {/* GRID */}
      <div className="row g-4">

        {videos.map((video, index) => (
          <div className="col-md-4" key={index}>

            <div className="video-card" onClick={() => setSelectedVideo(video.src)}>

              <video className="video-thumb">
                <source src={video.src} type="video/mp4" />
              </video>

              <div className="video-title">
                {video.title}
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* MODAL */}
      {selectedVideo && (
        <div className="video-modal" onClick={() => setSelectedVideo(null)}>

          <div className="video-box" onClick={(e) => e.stopPropagation()}>

            <video controls autoPlay>
              <source src={selectedVideo} type="video/mp4" />
            </video>

            <button
              className="close-btn"
              onClick={() => setSelectedVideo(null)}
            >
              
            </button>

          </div>

        </div>
      )}


    </div>
  );
};

export default Videos;