import React from "react";
const AiImage: React.FC<
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
      <circle
        cx={7}
        cy={8}
        r={1.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 3H4a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18.5 2 .258.697c.338.914.507 1.371.84 1.704.334.334.791.503 1.705.841L22 5.5l-.697.258c-.914.338-1.371.507-1.704.84-.334.334-.503.791-.841 1.705L18.5 9l-.258-.697c-.338-.914-.507-1.371-.84-1.704-.334-.334-.791-.503-1.705-.841L15 5.5l.697-.258c.914-.338 1.371-.507 1.704-.84.334-.334.503-.791.841-1.705zM21 16.271l-4.636-2.95a2.07 2.07 0 0 0-2.523.238L5 22"
      />
    </svg>
  );
};
export default AiImage;
