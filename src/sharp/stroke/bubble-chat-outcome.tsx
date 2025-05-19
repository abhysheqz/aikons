import React from "react";
const BubbleChatOutcome: React.FC<
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
        strokeWidth={1.5}
        d="M14 6h7.552M19 9l3-3-3-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.996 12h.008m3.987 0H16m-8 0h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.002 2C6.478 2 2 6.255 2 11.504c0 2.678 1.162 5.008 3.005 6.788l-1.001 3.695a.01.01 0 0 0 .014.012l3.977-1.784c1.227.51 2.582.793 4.007.793 5.346 0 9.971-4.123 9.998-9.505"
      />
    </svg>
  );
};
export default BubbleChatOutcome;
