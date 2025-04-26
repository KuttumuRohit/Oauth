import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function LearnPath() {
  const [videos, setVideos] = useState([]);
  const [keyword, setKeyword] = useState(''); // This can be set dynamically if needed

  useEffect(() => {
    const fetchVideos = async () => {
      const videosCollection = collection(db, 'videos');
      const querySnapshot = await getDocs(videosCollection);
      const videosList = [];
      querySnapshot.forEach((doc) => {
        if (doc.data().keyword === keyword) {
          videosList.push(doc.data());
        }
      });
      setVideos(videosList);
    };

    fetchVideos();
  }, [keyword]);

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">Learn Path - {keyword}</h2>
      <div className="space-y-4">
        {videos.length === 0 ? (
          <p>No videos found for this keyword.</p>
        ) : (
          videos.map((video, index) => (
            <div key={index} className="border p-4 rounded">
              <h3 className="font-bold">Keyword: {video.keyword}</h3>
              <video controls width="100%" className="my-2">
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))
        )}
      </div>
      <div className="mt-4">
        <Link to="/upload" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">
          Upload New Video
        </Link>
      </div>
    </div>
  );
}

export default LearnPath;
