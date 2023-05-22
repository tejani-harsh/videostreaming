import VideoCard from "./videocard";
function getVideos() {
  var fs = require("fs");
  var files = fs.readdirSync("public/videos/");
  return files;
}

export default function videogallery() {
  const data = getVideos();
  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {data.map((item, index) => (
        <VideoCard video={item} />
      ))}
    </div>
  );
}
