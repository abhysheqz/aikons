import React from "react";
const BubbleChatNotification: React.FC<
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
        d="M22.502 5.5c0 1.934-1.57 3.5-3.506 3.5a3.503 3.503 0 0 1-3.506-3.5c0-1.932 1.57-3.5 3.506-3.5a3.503 3.503 0 0 1 3.506 3.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.479 12h.009m3.993 0h.01m-8.014 0h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.482 2.175C6.582.987 1.498 6 1.498 11.5c0 2.679 1.155 5.01 2.986 6.791l-.995 3.697a.01.01 0 0 0 .014.012l3.95-1.785c1.22.51 2.566.794 3.981.794 4.76.067 9.97-3.512 10.064-9.516"
      />
    </svg>
  );
};
export default BubbleChatNotification;
