import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Gallery.css";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getData = async () => {
    if (searchText.trim() === "") {
      // 검색어가 비어있으면 아무 작업도 하지 않음
      return;
    }

    try {
      const APP_KEY = "40940885-2a9916cdefe059140d288f84c";
      const URL = `https://pixabay.com/api/?key=${APP_KEY}&q=${searchText}&image_type=photo&lang=ko`;

      const res = await axios.get(URL);
      setData(res.data.hits);
      console.log("성공: ", res.data.hits);
    } catch (err) {
      console.log("오류: ", err);
    }
  };

  const handleSearch = () => {
    getData();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // Enter 키를 눌렀을 때 검색 실행
      getData();
    }
  };

  const handleClear = () => {
    // 검색어를 초기화하고 검색 결과를 비움
    setSearchText("");
    setData([]);
  };

  return (
    <div className="main">
      <div className="up-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="검색어를 입력하세요"
        />
        <button onClick={handleSearch}>검색</button>
        <button onClick={handleClear}>초기화</button>
      </div>
      <div className="middle">
        {data.length > 0 ? (
          <ul>
            {data.map((image) => (
              <div key={image.id} className="image-container">
                <h3>#{image.user}</h3>
                <img
                  src={image.webformatURL}
                  alt={image.tags}
                  className="image"
                />
                <p>태그: {image.tags}</p>
                <p>뷰어: {image.views || "정보 없음"}</p>
                <p>종류: {image.type || "정보 없음"}</p>
              </div>
            ))}
          </ul>
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
