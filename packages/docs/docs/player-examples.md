---
id: player-examples
sidebar_label: "Examples"
title: "Examples for @remotion/player"
slug: /player/examples
---

## Bare example

```tsx twoslash
// @allowUmdGlobalAccess
// @filename: ./remotion/MyComp.tsx
export const MyComp = () => <></>;

// @filename: index.tsx
// ---cut---
import { Player } from "@remotion/player";
import { MyComp } from "./remotion/MyComp";

export const App: React.FC = () => {
  return (
    <Player
      component={MyComp}
      durationInFrames={120}
      compositionWidth={1920}
      compositionHeight={1080}
      fps={30}
    />
  );
};
```

## Adding controls

```tsx twoslash {12}
// @allowUmdGlobalAccess
// @filename: ./remotion/MyComp.tsx
export const MyComp = () => <></>;

// @filename: index.tsx
// ---cut---
import { Player } from "@remotion/player";
import { MyComp } from "./remotion/MyComp";

export const App: React.FC = () => {
  return (
    <Player
      component={MyComp}
      durationInFrames={120}
      compositionWidth={1920}
      compositionHeight={1080}
      fps={30}
      controls
    />
  );
};
```

## Loop video

```tsx twoslash {13}
// @allowUmdGlobalAccess
// @filename: ./remotion/MyComp.tsx
export const MyComp = () => <></>;

// @filename: index.tsx
// ---cut---
import { Player } from "@remotion/player";
import { MyComp } from "./remotion/MyComp";

export const App: React.FC = () => {
  return (
    <Player
      component={MyComp}
      durationInFrames={120}
      compositionWidth={1920}
      compositionHeight={1080}
      fps={30}
      controls
      loop
    />
  );
};
```

## Changing size

```tsx twoslash {14-17}
// @allowUmdGlobalAccess
// @filename: ./remotion/MyComp.tsx
export const MyComp = () => <></>;

// @filename: index.tsx
// ---cut---
import { Player } from "@remotion/player";
import { MyComp } from "./remotion/MyComp";

export const App: React.FC = () => {
  return (
    <Player
      component={MyComp}
      durationInFrames={120}
      compositionWidth={1920}
      compositionHeight={1080}
      fps={30}
      controls
      loop
      style={{
        width: 1280,
        height: 720,
      }}
    />
  );
};
```

:::tip
You can also use percentages and other units. We'll publish a guide for sizing the `<Player />` before the official release.
:::

## Adding autoplay

```tsx twoslash {18}
// @allowUmdGlobalAccess
// @filename: ./remotion/MyComp.tsx
export const MyComp = () => <></>;

// @filename: index.tsx
// ---cut---
import { Player } from "@remotion/player";
import { MyComp } from "./remotion/MyComp";

export const App: React.FC = () => {
  return (
    <Player
      component={MyComp}
      durationInFrames={120}
      compositionWidth={1920}
      compositionHeight={1080}
      fps={30}
      controls
      loop
      style={{
        width: 1280,
        height: 720,
      }}
      autoPlay
    />
  );
};
```

:::tip
You need to be vary of the browser's autoplay policy. In most browsers, you cannot autoplay an audio file or a video with audio.
:::

## Programmatically control the player

```tsx twoslash {1, 6-15, 18}
// @allowUmdGlobalAccess
// @filename: ./remotion/MyComp.tsx
export const MyComp = () => <></>;

// @filename: index.tsx
// ---cut---
import { Player, PlayerRef } from "@remotion/player";
import { MyComp } from "./remotion/MyComp";
import { useCallback, useRef } from "react";

export const App: React.FC = () => {
  const playerRef = useRef<PlayerRef>(null);

  const seekToMiddle = useCallback(() => {
    const { current } = playerRef;
    if (!current) {
      return;
    }
    current.seekTo(60);
  }, []);

  return (
    <Player
      ref={playerRef}
      component={MyComp}
      durationInFrames={120}
      compositionWidth={1920}
      compositionHeight={1080}
      fps={30}
    />
  );
};
```

## Listen to events

```tsx twoslash {1, 6-21, 25}
// @allowUmdGlobalAccess
// @filename: ./remotion/MyComp.tsx
export const MyComp = () => <></>;

// @filename: index.tsx
// ---cut---
import { Player, PlayerRef } from "@remotion/player";
import { MyComp } from "./remotion/MyComp";
import { useEffect, useRef } from "react";

export const App: React.FC = () => {
  const playerRef = useRef<PlayerRef>(null);

  useEffect(() => {
    const { current } = playerRef;
    if (!current) {
      return;
    }

    const listener = () => {
      console.log("paused");
    };
    current.addEventListener("pause", listener);
    return () => {
      current.removeEventListener("pause", listener);
    };
  }, []);

  return (
    <Player
      ref={playerRef}
      component={MyComp}
      durationInFrames={120}
      compositionWidth={1920}
      compositionHeight={1080}
      fps={30}
    />
  );
};
```

## Interactive player

```tsx twoslash {6-7, 16-18}
// @allowUmdGlobalAccess
// @filename: ./remotion/MyComp.tsx
export const MyComp = () => <></>;

// @filename: index.tsx
// ---cut---
import { useState } from "react";
import { Player } from "@remotion/player";
import { MyComp } from "./remotion/MyComp";

export const App: React.FC = () => {
  // Connect the state to a text field
  const [text, setText] = useState("world");

  return (
    <Player
      component={MyComp}
      durationInFrames={120}
      compositionWidth={1920}
      compositionHeight={1080}
      fps={30}
      inputProps={{
        text,
      }}
    />
  );
};
```
