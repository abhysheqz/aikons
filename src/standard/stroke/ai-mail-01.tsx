import React from "react";
const AiMail_01: React.FC<
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
        d="m6 7.5 4.89 3.173a2.05 2.05 0 0 0 2.22 0L18 7.5M18.5 14l.258.697c.338.914.507 1.371.84 1.704.334.334.791.503 1.705.841L22 17.5l-.697.258c-.914.338-1.371.507-1.704.84-.334.334-.503.791-.841 1.705L18.5 21l-.258-.697c-.338-.914-.507-1.371-.84-1.704-.334-.334-.791-.503-1.705-.841L15 17.5l.697-.258c.914-.338 1.371-.507 1.704-.84.334-.334.503-.791.841-1.705z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 13V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9"
      />
    </svg>
  );
};
export default AiMail_01;
