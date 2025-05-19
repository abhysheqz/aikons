import React from "react";
const DoNotTouch_01: React.FC<
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
        d="M17.5 22v-1.164c0-.923.499-1.65 1-2.336M8 22c0-1.117-.374-2.473-1.063-3.353l-3.6-4.598a1.696 1.696 0 0 1 .033-2.072 1.683 1.683 0 0 1 2.51-.14l1.62 1.626V7.5M13.502 5.5a1.5 1.5 0 1 1 3 0v2m-3-2v-2a1.5 1.5 0 0 0-3 0V5m3 .5v4m-3-4.5a1.5 1.5 0 0 0-1.5-1.5C8.174 3.5 8 4 8 4m2.502 1v1.5m6 5.5V7.5m0 0a1.5 1.5 0 1 1 3 0v6.167c0 .714 0 1.323-.012 1.833"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m2 2 20 20"
      />
    </svg>
  );
};
export default DoNotTouch_01;
