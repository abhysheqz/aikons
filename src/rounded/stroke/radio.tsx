import React from "react";
const Radio: React.FC<
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
      <circle
        cx={14.5}
        cy={13.5}
        r={3.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 13.5c0-3.759 0-5.638 1.053-6.893a4.5 4.5 0 0 1 .554-.554C4.862 5 6.741 5 10.5 5h3c3.759 0 5.638 0 6.892 1.053q.302.253.555.554C22 7.862 22 9.741 22 13.5s0 5.638-1.053 6.892a4.5 4.5 0 0 1-.555.555C19.138 22 17.26 22 13.5 22h-3c-3.759 0-5.638 0-6.893-1.053a4.5 4.5 0 0 1-.554-.555C2 19.138 2 17.26 2 13.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m10 5 4-3M6 12h1m-1 3h1"
      />
    </svg>
  );
};
export default Radio;
