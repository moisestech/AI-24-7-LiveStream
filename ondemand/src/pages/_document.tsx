import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <body style={{ background: 'black' }}>
          <Main />
          <NextScript />
        </body>
        <div
          id="bg-wrap"
          style={{
            position: 'absolute',
            top: 0,
            opacity: 0.5,
            height: '100vh',
            width: '100vw',
            zIndex: 0,
          }}
        >
          <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient
                id="Gradient1"
                cx="50%"
                cy="50%"
                fx="0.441602%"
                fy="50%"
                r=".5"
              >
                <animate
                  attributeName="fx"
                  dur="34s"
                  values="0%;0%;0%"
                  repeatCount="indefinite"
                ></animate>
                <stop offset="0%" stopColor="rgba(255, 0, 255, 1)"></stop>
                <stop offset="100%" stopColor="rgba(255, 0, 255, 0)"></stop>
              </radialGradient>
              <radialGradient
                id="Gradient2"
                cx="50%"
                cy="50%"
                fx="2.68147%"
                fy="50%"
                r=".5"
              >
                <animate
                  attributeName="fx"
                  dur="23.5s"
                  values="0%;0%;0%"
                  repeatCount="indefinite"
                ></animate>
                <stop offset="0%" stopColor="rgba(255, 255, 0, 1)"></stop>
                <stop offset="100%" stopColor="rgba(255, 255, 0, 0)"></stop>
              </radialGradient>
              <radialGradient
                id="Gradient3"
                cx="50%"
                cy="50%"
                fx="0.836536%"
                fy="50%"
                r=".5"
              >
                <animate
                  attributeName="fx"
                  dur="21.5s"
                  values="0%;0%;0%"
                  repeatCount="indefinite"
                ></animate>
                <stop offset="0%" stopColor="rgba(0, 255, 255, 1)"></stop>
                <stop offset="100%" stopColor="rgba(0, 255, 255, 0)"></stop>
              </radialGradient>
              <radialGradient
                id="Gradient4"
                cx="50%"
                cy="50%"
                fx="4.56417%"
                fy="50%"
                r=".5"
              >
                <animate
                  attributeName="fx"
                  dur="23s"
                  values="0%;0%;0%"
                  repeatCount="indefinite"
                ></animate>
                <stop offset="0%" stopColor="rgba(0, 255, 0, 1)"></stop>
                <stop offset="100%" stopColor="rgba(0, 255, 0, 0)"></stop>
              </radialGradient>
              <radialGradient
                id="Gradient5"
                cx="50%"
                cy="50%"
                fx="2.65405%"
                fy="50%"
                r=".5"
              >
                <animate
                  attributeName="fx"
                  dur="24.5s"
                  values="0%;0%;0%"
                  repeatCount="indefinite"
                ></animate>
                <stop offset="0%" stopColor="rgba(0,0,255, 1)"></stop>
                <stop offset="100%" stopColor="rgba(0,0,255, 0)"></stop>
              </radialGradient>
              <radialGradient
                id="Gradient6"
                cx="50%"
                cy="50%"
                fx="0.981338%"
                fy="50%"
                r=".5"
              >
                <animate
                  attributeName="fx"
                  dur="25.5s"
                  values="0%;0%;0%"
                  repeatCount="indefinite"
                ></animate>
                <stop offset="0%" stopColor="rgba(255,0,0, 1)"></stop>
                <stop offset="100%" stopColor="rgba(255,0,0, 0)"></stop>
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient4)">
              <animate
                attributeName="x"
                dur="20s"
                values="0%;0%;0%"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                dur="21s"
                values="0%;0%;0%"
                repeatCount="indefinite"
              />
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="17s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient5)">
              <animate
                attributeName="x"
                dur="23s"
                values="0%;0%;0%"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                dur="24s"
                values="0%;0%;0%"
                repeatCount="indefinite"
              />
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="18s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient6)">
              <animate
                attributeName="x"
                dur="25s"
                values="0%;0%;0%"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                dur="26s"
                values="0%;0%;0%"
                repeatCount="indefinite"
              />
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="360 50 50"
                to="0 50 50"
                dur="19s"
                repeatCount="indefinite"
              />
            </rect>
            <rect
              x="13.744%"
              y="1.18473%"
              width="100%"
              height="100%"
              fill="url(#Gradient1)"
              transform="rotate(334.41 50 50)"
            >
              <animate
                attributeName="x"
                dur="20s"
                values="0%;0%;0%"
                repeatCount="indefinite"
              ></animate>
              <animate
                attributeName="y"
                dur="21s"
                values="0%;0%;0%"
                repeatCount="indefinite"
              ></animate>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="7s"
                repeatCount="indefinite"
              ></animateTransform>
            </rect>
            <rect
              x="-2.17916%"
              y="35.4267%"
              width="100%"
              height="100%"
              fill="url(#Gradient2)"
              transform="rotate(255.072 50 50)"
            >
              <animate
                attributeName="x"
                dur="23s"
                values="0%;0%;0%"
                repeatCount="indefinite"
              ></animate>
              <animate
                attributeName="y"
                dur="24s"
                values="0%;0%;0%"
                repeatCount="indefinite"
              ></animate>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="12s"
                repeatCount="indefinite"
              ></animateTransform>
            </rect>
            <rect
              x="9.00483%"
              y="14.5733%"
              width="100%"
              height="100%"
              fill="url(#Gradient3)"
              transform="rotate(139.903 50 50)"
            >
              <animate
                attributeName="x"
                dur="25s"
                values="0%;0%;0%"
                repeatCount="indefinite"
              ></animate>
              <animate
                attributeName="y"
                dur="12s"
                values="0%;0%;0%"
                repeatCount="indefinite"
              ></animate>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="360 50 50"
                to="0 50 50"
                dur="9s"
                repeatCount="indefinite"
              ></animateTransform>
            </rect>
          </svg>
        </div>
      </Html>
    );
  }
}

export default MyDocument;
