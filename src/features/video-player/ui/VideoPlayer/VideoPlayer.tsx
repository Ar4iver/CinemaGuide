import React, { useEffect, useRef, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './VideoPlayer.module.scss'
import YouTube, { YouTubePlayer, YouTubeProps } from 'react-youtube';

interface VideoPlayerProps {
  className?: string
  trailerUrl: string
  trailerId: string
}

export const VideoPlayer = ({ className, trailerUrl, trailerId }: VideoPlayerProps) => {

  const playerRef = useRef<YouTubePlayer | null>(null);

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    playerRef.current = event.target
  };

  const playVideo = () => {
    if (playerRef.current) {
      playerRef.current.playVideo();
    }
  };

  const pauseVideo = () => {
    if (playerRef.current) {
      playerRef.current.pauseVideo();
    }
  };

  const stopVideo = () => {
    if (playerRef.current) {
      playerRef.current.stopVideo();
    }
  };

  const url = trailerId ? `https://www.youtube.com/embed/${trailerId}?start=8` : trailerUrl ? trailerUrl : null;
  console.log(url);

  const opts: YouTubeProps['opts'] = {
    height: '315',
    width: '560',
    playerVars: {
      autoplay: 0,
      controls: 0,
      modestbranding: 1, 
      rel: 0,
      iv_load_policy: 3,
      disablekb: 1,
      fs: 0,
    },
  };


  return (
    <div className={`${className} video-container`}>
      {url ? (
        <div>
          <YouTube
            videoId={trailerId}
            opts={opts}
            onReady={onPlayerReady}
          />
          <div className="controls">
            <button onClick={playVideo}>Play</button>
            <button onClick={pauseVideo}>Pause</button>
            <button onClick={stopVideo}>Stop</button>
          </div>
        </div>
      ) : (
        <p>Invalid YouTube URL</p>
      )}
    </div>
  );
};