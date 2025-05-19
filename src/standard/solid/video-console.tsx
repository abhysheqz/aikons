import React from "react";
const VideoConsole: React.FC<
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
        d="M2 5a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v4.355q0 .22-.004.43c-.011.897-.02 1.57.508 1.57h14.93c.58 0 .575-.72.568-1.664L20 9.355V5a2 2 0 0 0-2-2zm.793 11.793a1 1 0 0 1 1.414 0l.793.793.793-.793a1 1 0 0 1 1.414 1.414l-.793.793.793.793a1 1 0 0 1-1.414 1.414L9 18.414l-.793.793a1 1 0 0 1-1.414-1.414L7.586 17l-.793-.793a1 1 0 0 1 0-1.414M16.99 14.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm-1.982 3H15a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VideoConsole;
