import React from "react";
const SwipeLeft_05: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 8h1a2 2 0 0 1 2 2m0 0v1m0-1a1 1 0 0 1 1-1 2 2 0 0 1 2 2m0 0v1m0-1c0-.524.47-.922.987-.836l.342.058a2 2 0 0 1 1.671 1.972v1.473c0 2.173 0 3.26-.331 4.125-.192.502-.699 1.142-1.104 1.604a2.2 2.2 0 0 0-.565 1.44V22m-7-12V3.5a1.5 1.5 0 1 0-3 0v9.962l-1.62-1.625a1.683 1.683 0 0 0-2.51.14 1.696 1.696 0 0 0-.033 2.072l3.6 4.598C6.626 19.527 7 20.883 7 22M15 4.5h6m-6 0c0-.7 1.994-2.008 2.5-2.5M15 4.5c0 .7 1.994 2.008 2.5 2.5"
      />
    </svg>
  );
};
export default SwipeLeft_05;
