import React, { useState } from 'react';

import { useSpring, animated } from '@react-spring/web';

const TextScroller = ({ text }: { text: string }) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: 'translate(30%,0)' },
    to: { transform: 'translate(-30%,0)' },
    config: { duration: 50000 },
    reset: true,
    color: 'black',
    // reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });

  return (
    <div key={key}>
      <animated.div style={scrolling}>{text}</animated.div>
    </div>
  );
};

export default TextScroller;
