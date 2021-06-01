import { getFrequency } from "./getFrequency";

export const countHashtag_arr = (hashtags) => {
  const words = [];

  const freqs = getFrequency(hashtags);

  for (const hashtag in freqs) {
    words.push({ text: hashtag, value: freqs[hashtag] });
  }

  return words;
};
