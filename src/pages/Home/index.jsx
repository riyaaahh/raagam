import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FiAlignLeft } from "react-icons/fi";
import { LuPanelLeftClose } from "react-icons/lu";
import wildflower from "./../../assets/covers/wildflower.jpg";
import onedirection from "./../../assets/covers/onedirection.jpg";
import thatssotrue from "./../../assets/covers/thatssotrue.jpg";
import theycallthislove from "./../../assets/covers/theycallthislove.jpg";
import { PiHeartFill, PiPauseFill, PiPlayFill } from "react-icons/pi";
import Wildflower from "../../assets/songs/wildflower.mp3";
import Thatssotrue from "../../assets/songs/thatssotrue.mp3";
import Bestsongever from "../../assets/songs/bestsongever.mp3";
import Theycallthislove from "../../assets/songs/theycallthislove.mp3";

import Playlist from '../Playlist'
import { VscDebugRestart } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isPlaying3, setIsPlaying3] = useState(false);
  const [isPlaying4, setIsPlaying4] = useState(false);
    const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  const audioRef3 = useRef(null);
  const audioRef4 = useRef(null);


  const sidebarRef = useRef(null);
  const contentRef = useRef(null);
  const searchBarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const handlePlayPause1 = () => {
    if (isPlaying1) {
      audioRef1.current.pause();
    } else {
      audioRef1.current.play();
    }
    setIsPlaying1(!isPlaying1);
  };
  const handlePlayPause2 = () => {
    if (isPlaying2) {
      audioRef2.current.pause();
    } else {
      audioRef2.current.play();
    }
    setIsPlaying2(!isPlaying2);
  };
  const handlePlayPause3 = () => {
    if (isPlaying3) {
      audioRef3.current.pause();
    } else {
      audioRef3.current.play();
    }
    setIsPlaying3(!isPlaying3);
  };
  const handlePlayPause4 = () => {
    if (isPlaying4) {
      audioRef4.current.pause();
    } else {
      audioRef4.current.play();
    }
    setIsPlaying4(!isPlaying4);
  };
  const handleRestart1 = () => {
    audioRef1.current.currentTime = 0;
    if (!isPlaying1) {
      audioRef1.current.play();
      setIsPlaying1(true);
    }
  };
  const handleRestart2 = () => {
    audioRef2.current.currentTime = 0;
    if (!isPlaying2) {
      audioRef2.current.play();
      setIsPlaying2(true);
    }
  }; 
   const handleRestart3 = () => {
    audioRef3.current.currentTime = 0;
    if (!isPlaying3) {
      audioRef3.current.play();
      setIsPlaying3(true);
    }
  };
  const handleRestart4 = () => {
    audioRef4.current.currentTime = 0;
    if (!isPlaying4) {
      audioRef4.current.play();
      setIsPlaying4(true);
    }
  };
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
            <div className="font-ramaraja ml-16 font-extrabold text-pomegranate-500">
              raagam
            </div>
          </div>
          <div className="bg-mine-shaft-500 p-4 mt-10 rounded-md font-bold text-center">
            home
          </div>
          <Link to="/playlist" onClick={Playlist}>
  <div className="bg-mine-shaft-500 p-4 mt-4 rounded-md font-bold text-center">
    Playlist
  </div>
</Link>
        
          <div className="bg-mine-shaft-500 p-4 mt-4 rounded-md font-bold text-center flex items-center justify-center ">
  liked <PiHeartFill className="w-6 h-6" />
</div>
          <div>
          </div>
          <div className="bg-mine-shaft-500 p-4 mt-4 rounded-md font-bold  text-center">
            hindi
          </div>
          <div className="bg-mine-shaft-500 p-4 mt-4 rounded-md font-bold  text-center">
            liked
          </div>
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
          {/* sections */}
          <div className="">
            {/*section1*/}              
            <div className="ml-6 font-bold text-xl text-white p-2">English</div>

            <div className="flex justify-between gap-4 mb-4 ">
            
            <div className="bg-mine-shaft-500 px-10 py-5 text-white flex-1 text-center rounded-lg">
              <div>
                <div>
                  <img
                    src={thatssotrue}
                    className="rounded-md"
                    alt="That's So True"
                  />
                </div>
                <div className="font-bold mt-2">THAT'S SO TRUE</div>
                <div className="text-sm">Gracie Abrams</div>
                <div className="flex bg-mine-shaft-400 rounded-md p-3 items-center mt-2 justify-center gap-1">

                <button className="alien-button2" onClick={handlePlayPause2}>
                  {isPlaying2 ? <PiPauseFill /> : <PiPlayFill />}
                </button>
                <button className="alien-button2" onClick={handleRestart2}>
                  <VscDebugRestart />
                </button>
                </div>
                <audio ref={audioRef2} src={Thatssotrue} />
              </div>
            </div>
            <div className="bg-mine-shaft-500 px-10 py-5 text-white flex-1 text-center rounded-lg">
              <div>
                <div>
                  <img
                    src={theycallthislove}
                    className="rounded-md"
                    alt="Best Song Ever"
                  />
                </div>
                <div className="font-bold mt-2">THEY CALL THIS LOVE</div>
                <div className="text-sm">Elliot James</div>
                <div className="flex bg-mine-shaft-400 rounded-md p-3 items-center mt-2 justify-center gap-1">

                <button className="alien-button4" onClick={handlePlayPause4}>
                  {isPlaying4 ? <PiPauseFill /> : <PiPlayFill />}
                </button>
                <button className="alien-button4" onClick={handleRestart4}>
                  <VscDebugRestart />
                </button>
                </div>
                <audio ref={audioRef4} src={Theycallthislove} />
              </div>
            </div>
            <div className="bg-mine-shaft-500 px-10 py-5 text-white flex-1 text-center rounded-lg">
              <div>
                <img src={wildflower} className="rounded-md" alt="Wildflower" />
                <div className="font-bold mt-2">WILDFLOWER</div>
                <div className="text-sm">Billie Eilish</div>
                <div className="flex bg-mine-shaft-400 rounded-md p-3 items-center mt-2 justify-center gap-1">
                <button className="alien-button1 " onClick={handlePlayPause1}>
                  {isPlaying1 ? <PiPauseFill /> : <PiPlayFill />}
                </button>
                <button className="alien-button1" onClick={handleRestart1}>
                  <VscDebugRestart />
                </button>
                </div>
                <audio ref={audioRef1} src={Wildflower} />
              </div>
            </div>
            <div className="bg-mine-shaft-500 px-10 py-5 text-white flex-1 text-center rounded-lg">
              <div>
                <div>
                  <img
                    src={onedirection}
                    className="rounded-md"
                    alt="Best Song Ever"
                  />
                </div>
                <div className="font-bold mt-2">BEST SONG EVER</div>
                <div className="text-sm">One Direction</div>
                <div className="flex bg-mine-shaft-400 rounded-md p-3 items-center mt-2 justify-center gap-1">

                <button className="alien-button3" onClick={handlePlayPause3}>
                  {isPlaying3 ? <PiPauseFill /> : <PiPlayFill />}
                </button>
                <button className="alien-button3" onClick={handleRestart3}>
                  <VscDebugRestart />
                </button>
                </div>
                <audio ref={audioRef3} src={Bestsongever} />
              </div>
            </div>
            
            
          </div>

          {/*section2*/}
          <div className="ml-6 font-bold text-xl text-white p-2">Hindi</div>

          
          <div className="flex justify-between gap-4 mb-4 ">
            <div className="bg-mine-shaft-500 px-10 py-5 text-white flex-1 text-center rounded-lg">
              <div>
                <img src={wildflower} className="rounded-md" alt="Wildflower" />
                <div className="font-bold mt-2">WILDFLOWER</div>
                <div className="text-sm">Billie Eilish</div>
                <div className="flex bg-mine-shaft-400 rounded-md p-3 items-center mt-2 justify-center gap-1">
                <button className="alien-button1 " onClick={handlePlayPause1}>
                  {isPlaying1 ? <PiPauseFill /> : <PiPlayFill />}
                </button>
                <button className="alien-button1" onClick={handleRestart1}>
                  <VscDebugRestart />
                </button>
                </div>
                <audio ref={audioRef1} src={Wildflower} />
              </div>
            </div>
            <div className="bg-mine-shaft-500 px-10 py-5 text-white flex-1 text-center rounded-lg">
              <div>
                <div>
                  <img
                    src={thatssotrue}
                    className="rounded-md"
                    alt="That's So True"
                  />
                </div>
                <div className="font-bold mt-2">THAT'S SO TRUE</div>
                <div className="text-sm">Gracie Abrams</div>
                <div className="flex bg-mine-shaft-400 rounded-md p-3 items-center mt-2 justify-center gap-1">

                <button className="alien-button2" onClick={handlePlayPause2}>
                  {isPlaying2 ? <PiPauseFill /> : <PiPlayFill />}
                </button>
                <button className="alien-button2" onClick={handleRestart2}>
                  <VscDebugRestart />
                </button>
                </div>
                <audio ref={audioRef2} src={Thatssotrue} />
              </div>
            </div>
            <div className="bg-mine-shaft-500 px-10 py-5 text-white flex-1 text-center rounded-lg">
              <div>
                <div>
                  <img
                    src={onedirection}
                    className="rounded-md"
                    alt="Best Song Ever"
                  />
                </div>
                <div className="font-bold mt-2">BEST SONG EVER</div>
                <div className="text-sm">One Direction</div>
                <div className="flex bg-mine-shaft-400 rounded-md p-3 items-center mt-2 justify-center gap-1">

                <button className="alien-button3" onClick={handlePlayPause3}>
                  {isPlaying3 ? <PiPauseFill /> : <PiPlayFill />}
                </button>
                <button className="alien-button3" onClick={handleRestart3}>
                  <VscDebugRestart />
                </button>
                </div>
                <audio ref={audioRef3} src={Bestsongever} />
              </div>
            </div>
            <div className="bg-mine-shaft-500 px-10 py-5 text-white flex-1 text-center rounded-lg">
              <div>
                <div>
                  <img
                    src={theycallthislove}
                    className="rounded-md"
                    alt="Best Song Ever"
                  />
                </div>
                <div className="font-bold mt-2">THEY CALL THIS LOVE</div>
                <div className="text-sm">Elliot James</div>
                <div className="flex bg-mine-shaft-400 rounded-md p-3 items-center mt-2 justify-center gap-1">

                <button className="alien-button4" onClick={handlePlayPause4}>
                  {isPlaying4 ? <PiPauseFill /> : <PiPlayFill />}
                </button>
                <button className="alien-button4" onClick={handleRestart4}>
                  <VscDebugRestart />
                </button>
                </div>
                <audio ref={audioRef4} src={Theycallthislove} />
              </div>
            </div>
          </div>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
