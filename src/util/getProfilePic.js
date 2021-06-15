export const getProfilePic = (pubKey) => {
  return `https://bitclout.com/api/v0/get-single-profile-picture/${pubKey}?fallback=https://bitclout.com/assets/img/default_profile_pic.png`;
};
