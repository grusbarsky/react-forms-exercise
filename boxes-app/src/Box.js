import React from "react";

function Box({
  id,
  handleRemove,
  width = 4,
  height = 4,
  backgroundColor = "gray"
}) {
  const remove = () => handleRemove(id);
  return (
    <div>
      <div
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor
        }}
      />
      <button onClick={remove}>X</button>
    </div>
  );
}

export default Box;
