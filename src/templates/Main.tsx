import React, { ReactNode } from 'react';

import Link from 'next/link';

import { Navbar } from '../navigation/Navbar';
import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div
    className="antialiased w-full text-gray-100 px-3 md:px-0"
    style={{ position: 'absolute', zIndex: 100 }}
  >
    {props.meta}

    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div
            className="font-semibold text-6xl text-gray-900"
            style={{ color: 'white' }}
          >
            {AppConfig.title}
          </div>
          <div className="text-xl" style={{ color: 'white' }}>
            {AppConfig.description}
          </div>
        </div>
        <div>
          <Navbar>
            <li className="mr-6">
              <Link href="/">
                <a style={{ color: 'white' }}>Home</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/about/">
                <a style={{ color: 'white' }}>About</a>
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

      <div className="text-xl py-5">{props.children}</div>

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
