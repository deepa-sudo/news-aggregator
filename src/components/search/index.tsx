import React, { useEffect, useState } from 'react';
import './index.css'

const Search = () => {
  const [text, setText] = useState("");

  const onSubmit = evt => {
    evt.preventDefault();
    if (text === "") {
      alert("Please enter something!");
    } else {
      alert(text);
      setText("");
    }
  };

  useEffect(()=> {
    let url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=c62e8a3d7dba41fe9d68370276812e00';

    let req = new Request(url);

    fetch(req)
        .then(function(response) {
            console.log(response.json());
        })
  },[])

  const onChange = evt => setText(evt.target.value);

  return (
    <div className='w-100 maximum-width bg-default'>
      <form onSubmit={onSubmit} className="p-10 flex justify-center">
        <input
          type="text"
          name="text"
          placeholder="search..."
          value={text}
          onChange={onChange}
          className="search-input"
        />
        <button type="submit" className="">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
