import React, { ReactNode } from 'react';

import Link from 'next/link';
// VIDEO PLAYER

import 'video-react/dist/video-react.css';
// COMPONENTS
// @ts-ignore
import TextScroller from '../components/TextScroller';
import { Navbar } from '../navigation/Navbar';
import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="absolute antialiased w-full text-gray-100 z-50">
    {props.meta}

    {/* max-w-screen-md mx-auto */}
    <div id="homePage" className="w-full">
      <div className="text-scroller-wrapper text-black bg-white font-bold fixed top-0 w-full z-50 bg-white-100">
        <TextScroller text="After 5,000 Years of Civilization we all need a break... ////// ARTIFICIAL INTELLIGENCE 24/7 ////// PULL THE PLUG!!! SEE FIRE, SPEAK HEAVEN!!!" />
      </div>

      <section id="landingVideoWrapper" className=" w-full relative">
        {/* <div className="background-video">
          <LandingVideo />
        </div> */}

        <div
          id="logoWrapper"
          className="flex justify-center relative w-full h-full top-0 items-center pt-20"
        >
          <div id="logo" className="w-full relative z-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1530.71 793.7"
              className="w-full"
              style={{ fill: 'white' }}
            >
              <path
                className="cls-1"
                d="M680.31,425.2v170.08c0,15.65-12.69,28.34-28.35,28.34s-28.34-12.69-28.34-28.34v-170.08c0-7.83-3.17-14.92-8.3-20.05-5.13-5.13-12.22-8.3-20.05-8.3-15.65,0-28.35-12.69-28.35-28.35V198.43c0-15.66,12.7-28.35,28.35-28.35,7.83,0,14.92,3.17,20.05,8.3,5.13,5.13,8.3,12.22,8.3,20.05v170.07c0,7.83,3.17,14.92,8.3,20.05,5.13,5.13,12.22,8.3,20.04,8.3s14.92,3.17,20.05,8.3,8.3,12.22,8.3,20.05Z"
              />
              <path
                className="cls-1"
                d="M558.62,461.85c-5.13-5.14-12.22-8.31-20.04-8.31s-14.92-3.17-20.05-8.3c-5.13-5.13-8.3-12.21-8.3-20.04v-113.39c0-7.82-3.17-14.91-8.3-20.04-5.13-5.13-12.21-8.3-20.04-8.3s-14.92-3.18-20.05-8.31c-5.13-5.13-8.3-12.21-8.3-20.04v-56.69c0-7.83-3.17-14.92-8.3-20.05s-12.22-8.3-20.05-8.3c-15.65,0-28.34,12.69-28.34,28.35v56.69c0,15.65-12.7,28.35-28.35,28.35s-28.35,12.69-28.35,28.34v113.39c0,15.65-12.69,28.34-28.34,28.34s-28.35,12.7-28.35,28.35v113.39c0,15.65,12.69,28.34,28.35,28.34s28.34-12.69,28.34-28.34v-113.39c0-7.82,3.17-14.91,8.3-20.04,5.13-5.14,12.22-8.31,20.05-8.31s14.91,3.17,20.04,8.31c5.14,5.13,8.31,12.22,8.31,20.04v113.39c0,15.65,12.69,28.34,28.34,28.34s28.35-12.69,28.35-28.34v-113.39c0-7.82,3.17-14.91,8.3-20.04,5.13-5.14,12.22-8.31,20.05-8.31s14.91,3.17,20.04,8.31c5.13,5.13,8.3,12.22,8.3,20.04v113.39c0,15.65,12.69,28.34,28.35,28.34s28.34-12.69,28.34-28.34v-113.39c0-7.82-3.17-14.91-8.3-20.04Zm-133.43-8.31c-7.83,0-14.91-3.17-20.04-8.3-5.13-5.13-8.3-12.21-8.3-20.04v-113.39c0-7.82,3.17-14.91,8.3-20.04,5.13-5.13,12.21-8.3,20.04-8.3s14.92,3.17,20.05,8.3c5.13,5.13,8.3,12.22,8.3,20.04v113.39c0,15.65-12.69,28.34-28.35,28.34Z"
              />
              <path
                className="cls-1"
                d="M1020.47,595.28c0,7.83-3.17,14.91-8.3,20.04-5.13,5.13-12.22,8.3-20.05,8.3h-170.08c-15.65,0-28.34-12.69-28.34-28.34,0-7.83-3.17-14.92-8.3-20.05-5.13-5.13-12.22-8.3-20.05-8.3-15.66,0-28.35-12.69-28.35-28.35v-56.69c0-15.65,12.69-28.35,28.35-28.35s28.35-12.69,28.35-28.34v-56.7c0-15.65,12.69-28.34,28.34-28.34s28.35-12.69,28.35-28.35v-56.69c0-7.83-3.17-14.92-8.3-20.05-5.13-5.13-12.22-8.3-20.05-8.3h-56.69c-7.83,0-14.92,3.17-20.05,8.3-5.13,5.13-8.3,12.22-8.3,20.05v56.69c0,15.66-12.69,28.35-28.34,28.35s-28.35-12.69-28.35-28.35v-56.69c0-7.83,3.17-14.92,8.3-20.05,5.13-5.13,12.22-8.3,20.05-8.3,15.65,0,28.34-12.69,28.34-28.34,0-7.83,3.17-14.92,8.3-20.05,5.13-5.13,12.22-8.3,20.05-8.3h56.69c15.66,0,28.35,12.69,28.35,28.35,0,7.82,3.17,14.91,8.3,20.04,5.13,5.13,12.22,8.3,20.05,8.3,15.65,0,28.34,12.69,28.34,28.35v56.69c0,15.66-12.69,28.35-28.34,28.35-7.83,0-14.92,3.17-20.05,8.3-5.13,5.13-8.3,12.21-8.3,20.04v56.7c0,15.65-12.69,28.34-28.35,28.34-7.82,0-14.91,3.17-20.04,8.31-5.13,5.13-8.3,12.22-8.3,20.04v56.69c0,7.83,3.17,14.92,8.3,20.05,5.13,5.13,12.22,8.3,20.04,8.3h170.08c15.66,0,28.35,12.69,28.35,28.35Z"
              />
              <path
                className="cls-1"
                d="M1218.89,453.54h-56.69c-7.83,0-14.92-3.17-20.05-8.3-5.13-5.13-8.3-12.21-8.3-20.04v-113.39c0-7.82-3.17-14.91-8.3-20.04-5.13-5.13-12.21-8.3-20.04-8.3s-14.92-3.18-20.05-8.31-8.3-12.21-8.3-20.04v-56.69c0-7.83-3.17-14.92-8.3-20.05s-12.22-8.3-20.05-8.3c-15.65,0-28.34,12.69-28.34,28.35v56.69c0,15.65-12.69,28.35-28.35,28.35s-28.34,12.69-28.34,28.34v56.69c0,15.66-12.7,28.35-28.35,28.35-7.83,0-14.92,3.17-20.05,8.3-5.13,5.13-8.3,12.22-8.3,20.05,0,15.65,12.69,28.34,28.35,28.34,7.83,0,14.91,3.17,20.04,8.31,5.13,5.13,8.31,12.22,8.31,20.04,0,15.66,12.69,28.35,28.34,28.35h56.69c7.83,0,14.92,3.17,20.05,8.3,5.13,5.13,8.3,12.21,8.3,20.04v56.7c0,15.65,12.69,28.34,28.35,28.34s28.34-12.69,28.34-28.34v-56.7c0-7.83,3.17-14.91,8.3-20.04,5.13-5.13,12.22-8.3,20.05-8.3h56.69c7.83,0,14.92-3.17,20.05-8.3,5.13-5.13,8.3-12.22,8.3-20.05,0-15.65-12.69-28.35-28.35-28.35Zm-226.77,0c-7.82,0-14.91-3.17-20.04-8.3-5.13-5.13-8.3-12.21-8.3-20.04s3.17-14.92,8.3-20.05c5.13-5.13,12.22-8.3,20.04-8.3,15.66,0,28.35-12.69,28.35-28.35v-56.69c0-7.82,3.17-14.91,8.3-20.04,5.13-5.13,12.21-8.3,20.04-8.3s14.92,3.17,20.05,8.3c5.13,5.13,8.3,12.22,8.3,20.04v113.39c0,15.65-12.69,28.34-28.35,28.34h-56.69Zm113.39,56.7c-7.83,0-14.92-3.17-20.05-8.3-5.13-5.13-8.3-12.22-8.3-20.05s3.17-14.91,8.3-20.04c5.13-5.14,12.22-8.31,20.05-8.31s14.91,3.17,20.04,8.31c5.13,5.13,8.3,12.22,8.3,20.04,0,15.66-12.69,28.35-28.34,28.35Z"
              />
            </svg>
          </div>
        </div>
      </section>

      <div className="border-b border-gray-300">
        <article className="w-full items-center flex flex-1 flex-col justify-center pt-16 pb-8">
          <span className="font-semibold text-6xl text-gray-900 text-center text-white">
            {/* {AppConfig.title} */}
            🧠 🤖 🎨
          </span>
          <span className="text-xl text-white text-center md:max-w-xs lg:max-w-none">
            {AppConfig.description}
          </span>
        </article>

        <div className="flex justify-center items-center p-8">
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3N9fs6XiDSI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}

          <div className="w-full min-h-min h-{500}">
            <iframe
              className="w-full h-{500}"
              src="https://player.restream.io/?token=ae4a3018f54047eba52a20301870e51a"
              allow="autoplay"
              allowFullScreen
              frameBorder="0"
              width="560"
              height="315"
            />
          </div>
        </div>
        <div>
          <Navbar>
            <li className="mr-6">
              <Link href="/">
                <a className="text-white">{'Home'}</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/about/">
                <a className="text-white">{'About'}</a>
              </Link>
            </li>
            <li className="mr-6">
              <a
                style={{ color: 'white' }}
                href="https://calendar.google.com/calendar/u/0/embed?src=ai24live@gmail.com&ctz=America/New_York"
                target="_blank"
                rel="noreferrer"
              >
                Calendar
              </a>
            </li>
          </Navbar>
        </div>
      </div>

      <div className="text-xl p-5" style={{ maxWidth: 1000, margin: '0 auto' }}>
        {props.children}
      </div>

      <div
        className="border-t border-gray-300 text-center py-8 text-sm"
        style={{ color: 'white' }}
      >
        © Copyright {new Date().getFullYear()} {AppConfig.title}.
        {/* <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a> */}
        {/*
         * PLEASE READ THIS SECTION
         * We'll really appreciate if you could have a link to our website
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * Thank you for your support it'll mean a lot for us.
         */}
      </div>
    </div>
  </div>
);

export { Main };
