import React from "react";
const AiEraser: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m11 11 5.5 5.5M10.718 21.5H8.42c-.52 0-1.019-.209-1.386-.58l-1.96-1.978a1.99 1.99 0 0 1 0-2.799l9.97-10.063a1.95 1.95 0 0 1 2.772 0l3.109 3.137a1.99 1.99 0 0 1 0 2.799l-8.822 8.904c-.368.371-.866.58-1.386.58M6 2.5l.258.697c.338.914.507 1.371.84 1.704.334.334.791.503 1.705.841L9.5 6l-.697.258c-.914.338-1.371.507-1.704.84-.334.334-.503.791-.841 1.705L6 9.5l-.258-.697c-.338-.914-.507-1.371-.84-1.704-.334-.334-.791-.503-1.705-.841L2.5 6l.697-.258c.914-.338 1.371-.507 1.704-.84.334-.334.503-.791.841-1.705z"
      />
    </svg>
  );
};
export default AiEraser;
