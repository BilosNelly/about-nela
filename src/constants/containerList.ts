import React from 'react';

import { IContainerItem } from '../typings';
import {
    avatar,
    dogo,
    tennis,
    world,
  } from '../assets';

export const containerList: IContainerItem[] = [
    {
      img: avatar,
      title: "Antonela",
      text: "Software developer, full-stack but web oriented. Bachelor in computer science and world citizen since 1996."
    },
    {
      img: dogo,
      title: "Tokyo",
      text: "Shiba inu. Crazy dog. Demon since 2021. FYI: 2 Important facts about Tokyo: He is older than the Elon Musk's Shiba & was not named after La casa de papel."
    },
    {
      img: world,
      title: "Where now?",
      text: "One of my biggest hobbies is traveling. I love to wander around, explore new places, meet new cultures and get out of my comfort zone."
    },
    {
      img: tennis,
      title: "Ping Pong",
      text: "It is unusual to have an IT company without a ping-pong table. That's how it all started... exhibitioner since 2017."
    },
  ]