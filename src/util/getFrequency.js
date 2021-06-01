export const getFrequency = (hashtags) => {
  const freqs = {};

  hashtags.forEach((hashtag) => {
    hashtag = hashtag.trim();
    if (freqs.hasOwnProperty(hashtag)) freqs[hashtag] += 1;
    else freqs[hashtag] = 1;
  });

  return freqs;
};
