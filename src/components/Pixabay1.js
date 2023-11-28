import axios from "axios";
import { useState, useEffect } from "react";

const Pixabay1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const APP_KEY = "40940885-2a9916cdefe059140d288f84c";
    const TEXT = "샐러드";
    const URL = `https://pixabay.com/api/?key=${APP_KEY}&q=${TEXT}&image_type=photo&lang=ko`;

    const getData = async () => {
      try {
        const res = await axios.get(URL);
        setData(res.data.hits);
        console.log("성공: ", res.data.hits);
      } catch (err) {
        console.log("오류: ", err);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h2>pixabay1</h2>
      <div>
        {data &&
          data.map((image) => (
            <img
              key={image.id}
              src={image.webformatURL}
              alt={image.tags}
              style={{ width: 150 }}
            />
          ))}
      </div>
    </div>
  );
};

export default Pixabay1;
