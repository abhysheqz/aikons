import React from "react";
const AiBrowser: React.FC<
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
        d="m18.5 15 .258.697c.338.914.507 1.371.84 1.704.334.334.791.503 1.705.841L22 18.5l-.697.258c-.914.338-1.371.507-1.704.84-.334.334-.503.791-.841 1.705L18.5 22l-.258-.697c-.338-.914-.507-1.371-.84-1.704-.334-.334-.791-.503-1.705-.841L15 18.5l.697-.258c.914-.338 1.371-.507 1.704-.84.334-.334.503-.791.841-1.705zM2 9h19"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.5 5.5h.009M10.5 5.5h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 13V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h9"
      />
    </svg>
  );
};
export default AiBrowser;
