import React from "react";
const WaterPolo: React.FC<
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
        d="M2 21.193c.685 1.051 1.571 1.051 2.273 0 2.257-3.452 4.407 2.483 6 .04 2.43-3.664 4.178 2.689 6-.04 2.376-3.635 3.857 2.385 5.727.391M20.5 10.571C20.5 5.838 16.694 2 12 2s-8.5 3.838-8.5 8.571c0 2.56 1.063 4.822 3.188 6.429 4.215-.136 8.49-2.464 9.562-4.714m4.25-1.715c-2.39-3.183-6.89-4.695-9.35-4.19m9.35 4.19A8.58 8.58 0 0 1 17.622 17M3.741 12.608c2.592 1.11 5.426.642 7.834-1.769m0 0c-1.13-4.236-.723-7.232.722-8.839m-.722 8.84C15.56 10.354 18.278 13.392 19 15M8.222 12.92c-1.603-1.79-2.063-6.057-.46-9.634"
      />
    </svg>
  );
};
export default WaterPolo;
