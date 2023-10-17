function getCroppedImageUrl(url: string) {
  // we grab all the characters from begining of the url to the end of the "media/"
  // position in the url string (thats why we add + media.length)
  const target = "media/";
  const index = url.indexOf(target) + target.length;

  // we add the url from beginning to the end of "media/" position,
  // then we append the "crop/600/400/" to it, then we add the rest of the url
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}

export default getCroppedImageUrl;
