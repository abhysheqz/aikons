import React from "react";
const Treadmill_02: React.FC<
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
        d="M18.868 19H3.32C2.59 19 2 18.397 2 17.653c0-.556.334-1.055.841-1.256L15.6 11.33C18.68 10.108 22 12.428 22 15.8 22 17.569 20.598 19 18.868 19Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 15h.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 15 4.5 9M7 9H2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m17 11 2-6c1.592 0 2.606-.423 3-2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6 19-1 2M18 19v2"
      />
    </svg>
  );
};
export default Treadmill_02;
