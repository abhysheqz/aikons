import React from "react";
const MessageEdit_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.439 14.975h8.901M7.44 9.985H10.9"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.79 2.99c-7.572.8-9.881 9.586-6.196 15.007l-1.558 3.921a.1.1 0 0 0 .126.13l4.294-1.637c2.09 1.421 7.583 1.615 10.684.212 1.777-1.089 5.195-2.761 4.68-10.715M9.79 2.99q.23-.013.465-.013m-.466.013 1.359-.005 1.502-.008"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m19.276 2.084-5.45 5.42v2.518h2.556l5.35-5.4a.1.1 0 0 0 0-.14l-2.315-2.396a.1.1 0 0 0-.14-.002Z"
      />
    </svg>
  );
};
export default MessageEdit_01;
