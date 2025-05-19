import React from "react";
const VideoAi: React.FC<
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
        d="M4 2.25A2.75 2.75 0 0 0 1.25 5v12A2.75 2.75 0 0 0 4 19.75h10.984c-1.498-.855-1.286-3.343.637-3.736a1.79 1.79 0 0 0 1.393-1.393c.442-2.161 3.53-2.161 3.972 0 .143.701.691 1.25 1.393 1.393q.198.04.371.11V5A2.75 2.75 0 0 0 20 2.25zm5 5.537v6.426a.787.787 0 0 0 1.184.68l5.384-3.141a.87.87 0 0 0 0-1.504l-5.384-3.14A.787.787 0 0 0 9 7.787m10.761 7.084c-.17-.828-1.353-.828-1.522 0a3.04 3.04 0 0 1-2.368 2.368c-.828.17-.828 1.353 0 1.522a3.04 3.04 0 0 1 2.368 2.368c.17.828 1.353.828 1.522 0a3.04 3.04 0 0 1 2.368-2.368c.828-.17.828-1.353 0-1.522a3.04 3.04 0 0 1-2.368-2.368"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VideoAi;
