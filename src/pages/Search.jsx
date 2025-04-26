import { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/videos/search?q=${query}`);
      const data = await res.json();
      if (res.ok) {
        setResults(data.videos);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">Search Topics</h2>
      <div className="flex gap-2 mb-4">
        <input type="text" placeholder="Search by topic" value={query} onChange={e => setQuery(e.target.value)} className="border p-2 flex-1" />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4">Search</button>
      </div>
      <div className="grid gap-4">
        {results.map((video) => (
          <div key={video._id} className="border p-4 rounded">
            <h3 className="text-xl font-bold">{video.title}</h3>
            <video src={video.url} controls className="w-full mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
