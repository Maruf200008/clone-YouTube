const useCallApi = () => {
  const key = "AIzaSyBfv7C9BrkBSB6PPJbLUxpGv7n-bEBV_Fo";
  const id = "@freecodecamp";

  async function getArtist() {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${id}&part=snippet,id&order=date&maxResult=50`
    );
    return res.json();
  }

  async function fetchData() {
    try {
      const data = await getArtist();
      console.log(data);
      // আপনি এখানে এখানে এই `data` ব্যবহার করতে পারেন যদি আপনি অন্য কোনও কাজ করতে চান।
    } catch (error) {
      console.error("ডেটা লোড করা যায়নি:", error);
    }
  }

  fetchData();
};
