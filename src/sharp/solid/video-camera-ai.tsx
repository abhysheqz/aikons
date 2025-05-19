import React from "react";
const VideoCameraAi: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M17.75 3.817a2.65 2.65 0 0 1-2.067-2.067h-.866a2.65 2.65 0 0 1-2.067 2.067v.866a2.65 2.65 0 0 1 2.067 2.067h.866a2.65 2.65 0 0 1 2.067-2.067zm-6.484 1.532-.123-.6H9.857l-.123.6A3.7 3.7 0 0 1 6.85 8.234l-.6.123v1.286l.6.122a3.7 3.7 0 0 1 2.884 2.885l.123.6h1.286l.123-.6a3.7 3.7 0 0 1 2.884-2.885l.6-.122V8.356l-.6-.122a3.7 3.7 0 0 1-2.884-2.885m11.484 2.9h-2.59l-2.41 2.755V8H16v2.663l-1.6.327a2.45 2.45 0 0 0-1.91 1.91l-.326 1.6H8.837l-.327-1.6a2.45 2.45 0 0 0-1.91-1.91L5 10.663V7.336l1.6-.327a2.45 2.45 0 0 0 1.677-1.26H1.25v16.5h16.5v-5.253l2.41 2.754h2.59z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VideoCameraAi;
