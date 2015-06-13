//

export const ALONE_FRAMES = Symbol('ALONE_FRAMES');
export const PLAYING_FRAMES = Symbol('PLAYING_FRAMES');
export const WINNING_FRAMES = Symbol('WINNING_FRAMES');
export const LOSING_FRAMES = Symbol('LOSING_FRAMES');

export const VIDEO_FRAMES = [
  {
    end: 47,
    state: ALONE_FRAMES,
    start: 0
  },
  {
    end: 64,
    state: PLAYING_FRAMES,
    start: 47
  },
  {
    end: 70,
    state: WINNING_FRAMES,
    start: 64
  },
  {
    end: 76,
    state: PLAYING_FRAMES,
    start: 70
  },
  {
    end: 79,
    state: LOSING_FRAMES,
    start: 76
  },
  {
    end: 83,
    state: PLAYING_FRAMES,
    start: 79
  },
  {
    end: 85,
    state: LOSING_FRAMES,
    start: 83
  },
  {
    end: 90,
    state: PLAYING_FRAMES,
    start: 85
  },
  {
    end: 93,
    state: LOSING_FRAMES,
    start: 90
  },
  {
    end: 93,
    state: PLAYING_FRAMES,
    start: 97
  },
  {
    end: 103,
    state: WINNING_FRAMES,
    start: 98
  },
  {
    end: 113,
    state: PLAYING_FRAMES,
    start: 103
  },
  {
    end: 117,
    state: WINNING_FRAMES,
    start: 112
  },
  {
    end: 120,
    state: PLAYING_FRAMES,
    start: 117
  },
  {
    end: 127,
    state: LOSING_FRAMES,
    start: 120
  },
  {
    end: 132,
    state: PLAYING_FRAMES,
    start: 127
  },
  {
    end: 135,
    state: WINNING_FRAMES,
    start: 132
  },
  {
    end: 139,
    state: PLAYING_FRAMES,
    start: 135
  },
  {
    end: 142,
    state: WINNING_FRAMES,
    start: 139
  }
];
