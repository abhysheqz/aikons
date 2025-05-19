import React from "react";
const BubbleChat: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.99 12H12m3.986 0h.01m-8 0h.008"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 21c5.522 0 9.998-4.253 9.998-9.5S17.522 2 12 2s-9.998 4.253-9.998 9.5c0 2.677 1.162 5.006 3.004 6.786l-1 3.694a.01.01 0 0 0 .013.011l3.976-1.783c1.226.51 2.58.793 4.005.793Z"
      />
    </svg>
  );
};
export default BubbleChat;
