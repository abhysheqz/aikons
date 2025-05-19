import React from "react";
const Transparency: React.FC<
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
        d="M9 18.25c-.497 0-.746 0-.831.155-.086.155.031.342.266.716A7.75 7.75 0 1 0 19.12 8.436c-.373-.236-.56-.353-.715-.267s-.154.334-.154.832A9.25 9.25 0 0 1 9 18.25"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.212 8.458q-.025.268-.025.542a5.815 5.815 0 0 0 3.882 5.484 7.7 7.7 0 0 1 .308-1.862zm.62-2.121 4.392 4.392a7.8 7.8 0 0 1 2.505-2.505L6.337 3.832a5.84 5.84 0 0 0-2.505 2.505m4.626-3.125 4.164 4.165a7.7 7.7 0 0 1 1.862-.308 5.815 5.815 0 0 0-6.026-3.857M14.813 9q-.274 0-.543.025l.518.518q.024-.27.024-.543m-.645 2.663L12.15 9.645a5.84 5.84 0 0 0-2.505 2.505l2.018 2.018a5.84 5.84 0 0 0 2.505-2.505m-4.625 3.124-.518-.517Q9 14.539 9 14.813q.274 0 .543-.026M1.25 9a7.75 7.75 0 1 1 15.5 0 7.75 7.75 0 0 1-15.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Transparency;
