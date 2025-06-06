import React from "react";
const Quiz_02: React.FC<
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
        fill="#D9D9D9"
        fillRule="evenodd"
        d="M11.992 14.5h.01z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.992 14.5h.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10 8a2 2 0 1 1 3.683 1.08C13.085 10.01 12 10.896 12 12"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.369 16.488c.051-.308.245-.57.512-.73C18.045 14.461 19.5 12.38 19.5 9.62 19.5 5.41 16.142 2 12 2S4.5 5.412 4.5 9.62c0 2.761 1.366 4.841 3.52 6.137.267.16.46.423.512.73l.279 1.677a1 1 0 0 0 .986.836h4.306a1 1 0 0 0 .986-.836zM14 19v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2"
      />
    </svg>
  );
};
export default Quiz_02;
