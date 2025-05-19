import React from "react";
const CoinsSwap: React.FC<
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
        d="M4.75 4.5c-.69 0-1.25.56-1.25 1.25v3a.75.75 0 0 1-1.5 0v-3A2.75 2.75 0 0 1 4.75 3h3a.75.75 0 0 1 .6 1.2l-1.5 2a.75.75 0 0 1-1.35-.45V4.5zM21.75 15a.75.75 0 0 1 .75.75v3a2.75 2.75 0 0 1-2.75 2.75h-3a.75.75 0 0 1-.6-1.2l1.5-2a.75.75 0 0 1 1.35.45V20h.75c.69 0 1.25-.56 1.25-1.25v-3a.75.75 0 0 1 .75-.75M2 15.75a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.237 6.97c-.047.17-.07.255-.05.332a.3.3 0 0 0 .114.168c.064.047.164.058.364.08a8.25 8.25 0 0 1 7.284 7.285c.022.2.033.3.08.363.04.056.101.098.168.115.077.02.163-.004.333-.05A6.75 6.75 0 1 0 9.237 6.97"
      />
    </svg>
  );
};
export default CoinsSwap;
