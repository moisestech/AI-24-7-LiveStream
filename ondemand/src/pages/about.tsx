import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main
    meta={<Meta title="AI24 Live" description="Artificial Livestream 24/7" />}
  >
    <Content>
      <p>
        The Experimental A.I. Film & Music livestream for the new wave of
        content generation.
      </p>
      <p>
        Content production is accelerating through the advancement of A.I.
        generative models. AI24 aims to be the 24/7 streaming media-channel
        assisted using machine learning visuals and aesthetics. From music
        videos to A.I. movies, and animations.
      </p>
      <p>
        AI24 is progressive community, driven by sonic and visual creative
        inquiry through experimental contribution.
      </p>
      <p>
        We promote and highlight emerging A.I. creators and music producers. We
        are open to submissions to all those that want to get involved.
      </p>
    </Content>
  </Main>
);

export default About;
