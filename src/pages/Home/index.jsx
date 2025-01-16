import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FiAlignLeft } from "react-icons/fi";
import { LuPanelLeftClose } from "react-icons/lu";
import wildflower from './../../assets/covers/wildflower.jpg';
import onedirection from './../../assets/covers/onedirection.jpg';
import thatssotrue from './../../assets/covers/thatssotrue.jpg';
import { PiHeartFill, PiPauseFill, PiPlayFill } from "react-icons/pi";
import Wildflower from '../../assets/songs/wildflower.mp3'
import { VscDebugRestart } from "react-icons/vsc";

const Sidebar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const sidebarRef = useRef(null);
  const contentRef = useRef(null);
  const searchBarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
 const handleRestart = () => {
  audioRef.current.currentTime =0;
  if (!isPlaying){
    audioRef.current.play();
    setIsPlaying(true);
  }
 }
  useEffect(() => {
    gsap.from(searchBarRef.current, {
      opacity: 0,
      y: -20,
      duration: 1,
      ease: "power3.out",
    });
    gsap.to(searchBarRef.current, {
      opacity: 1,
      y: 6,
      duration: 1,
      ease: "power3.out",
    });
    if (isOpen) {
      gsap.set(sidebarRef.current, { x: "0%" });
      gsap.set(contentRef.current, { width: "calc(100% - 240px)" });
    }
  }, [isOpen]);

  const toggleSidebar = () => {
    if (isOpen) {
      gsap.to(sidebarRef.current, {
        x: "-100%",
        duration: 0.9,
        ease: "power3.inOut",
      });
      gsap.to(contentRef.current, {
        width: "100%",
        duration: 0.9,
        ease: "power3.inOut",
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: "0%",
        duration: 0.9,
        ease: "power3.inOut",
      });
      gsap.to(contentRef.current, {
        width: "calc(100% - 240px)",
        duration: 0.9,
        ease: "power3.inOut",
      });
    }

    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-bunker2-500 flex h-screen fixed left-0 top-0 w-screen">
      {/* Sidebar Toggle Button */}
      <button
        className="absolute top-6 left-4 z-20 p-2 bg-gray-800 text-white rounded"
        onClick={toggleSidebar}
      >
        {isOpen ? <LuPanelLeftClose /> : <FiAlignLeft />}
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="h-screen w-60 bg-bunker-500 fixed left-0 top-0 -translate-x-full z-10 rounded-r-lg"
      >
        <div className="text-white p-4 pt-6">
          <div className="font-capriola  text-2xl text-center flex">
            <div className="font-ramaraja ml-16 font-extrabold text-pomegranate-500">raagam</div>
          </div>
          <div className="bg-mine-shaft-500 p-4 mt-10 rounded-md font-bold text-center">home</div>
          <div className="bg-mine-shaft-500 p-4 mt-4 rounded-md font-bold  text-center">playlist</div>
          <div className="bg-mine-shaft-500 p-4 mt-4 rounded-md font-bold  text-center">liked</div>
          <div className="bg-mine-shaft-500 p-4 mt-4 rounded-md font-bold  text-center">hindi</div>
          <div className="bg-mine-shaft-500 p-4 mt-4 rounded-md font-bold  text-center">liked</div>
        </div>
      </div>

      {/* Home Screen Content */}
      <div
        ref={contentRef}
        className="bg-bunker2-500  h-screen ml-auto transition-transform"
        style={{ width: "100%" }}
      >
        <div className="p-6 w-full">
          {/* Search Bar */}
          <div
            ref={searchBarRef}
            className="bg-shark  rounded-md px-4 py-2 border border-bunker-500 mb-6 flex items-center shadow-md"
          >
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-transparent border-none outline-none text-gray-700"
            />
            <button className="ml-4 px-4 py-1 bg-bunker-500 text-white rounded-md">
              Search
            </button>
          </div>
          <div className="flex justify-between gap-4 ">
            <div className="bg-mine-shaft-500 px-10 py-5 text-white flex-1 text-center rounded-lg">
              <div>
                <img src={wildflower} className="rounded-md" alt="Wildflower" />
                <div className="font-bold">WILDFLOWER</div>
                <div>Billie Eilish</div>
                <button className="alien-button" onClick={handlePlayPause}>
                  {isPlaying ? <PiPauseFill/> : <PiPlayFill/>}
                </button>
                <button className="alien-button" onClick={handleRestart}>
                <VscDebugRestart />
                </button>
                <audio ref={audioRef} src={Wildflower} />
              </div>
            </div>
            <div className="bg-mine-shaft-500 px-10 py-5 text-white flex-1 text-center rounded-lg">
              <div>
                <div>
                  <img src={thatssotrue} className="rounded-md" alt="That's So True" />
                </div>
                <div className="font-bold">THAT'S SO TRUE</div>
                <div>Gracie Abrams</div>
                <button className="alien-button" onClick={handlePlayPause}>
                  {isPlaying ? "Pause" : "Play"}
                </button>
              </div>
            </div>
            <div className="bg-mine-shaft-500 px-10 py-5 text-white flex-1 text-center rounded-lg">
              <div>
                <div>
                  <img src={onedirection} className="rounded-md" alt="Best Song Ever" />
                </div>
                <div className="font-bold">BEST SONG EVER</div>
                <div>One Direction</div>
                <button className="alien-button" onClick={handlePlayPause}>
                  {isPlaying ? "Pause" : "Play"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;