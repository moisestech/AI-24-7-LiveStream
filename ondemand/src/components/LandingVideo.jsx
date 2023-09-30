import React from 'react';

import { Player, ControlBar } from 'video-react';

// interface PlayerProps {
//   fluid: boolean;
//   loop: boolean;
//   muted: boolean;
//   autoPlay: boolean;
//   poster: string;
// }

export default function LandingVideo() {
  return (
    <Player fluid loop muted autoPlay poster="/assets/poster.png">
      <source
        src="https://res.cloudinary.com/react-graphql-store/video/upload/v1658193320/AI24live-landing-page-visual-vibes_zxwvpc.mp4"
        type="video/mp4"
      />
      <ControlBar disableCompletely={true} />
    </Player>
  );
}
