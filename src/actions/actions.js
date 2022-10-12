export const addToFollowing = (podcastObj) => {
  console.log(podcastObj)
  return {
  type: "ADD_TO_FOLLOWING",
  data: podcastObj
  }
}