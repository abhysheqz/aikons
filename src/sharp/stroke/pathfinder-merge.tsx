import React from "react";
const PathfinderMerge: React.FC<
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
        d="M15 9h-.75v.75H15zm-6 6h.75v-.75H9zm6-13h.75a.75.75 0 0 0-.75-.75zM2 2v-.75a.75.75 0 0 0-.75.75zm0 13h-.75c0 .414.336.75.75.75zm7 7h-.75c0 .414.336.75.75.75zm13 0v.75a.75.75 0 0 0 .75-.75zm0-13h.75a.75.75 0 0 0-.75-.75zm-6.25 0V2h-1.5v7zM15 1.25H2v1.5h13zM1.25 2v13h1.5V2zM9 14.25H2v1.5h7zm-.75.75v7h1.5v-7zM9 22.75h13v-1.5H9zM22.75 22V9h-1.5v13zM22 8.25h-7v1.5h7z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.99 2H2.106a.01.01 0 0 0-.01.01L2 14.96q0 .01.01.01l7.04-.01L9 21.99q0 .009.01.01h12.979a.01.01 0 0 0 .01-.01V9.04a.01.01 0 0 0-.01-.01h-6.989V2.01a.01.01 0 0 0-.01-.01Z"
      />
    </svg>
  );
};
export default PathfinderMerge;
