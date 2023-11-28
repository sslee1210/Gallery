import { useState, useEffect, useRef } from "react";

const Box = ({ boxStyle }) => {
  const [style, setStyle] = useState();
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = countRef.current + 1;
    console.log("박스 사이즈 함수 생성", countRef.current);
    setStyle(boxStyle);
  }, [boxStyle]);

  return (
    <div>
      <div style={style}>box</div>
    </div>
  );
};

export default Box;
