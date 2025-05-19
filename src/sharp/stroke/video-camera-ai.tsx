import React from "react";
const VideoCameraAi: React.FC<
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
        strokeWidth={1.5}
        d="M10.47 6A4.45 4.45 0 0 1 7 9.47v.06A4.45 4.45 0 0 1 10.47 13h.06A4.45 4.45 0 0 1 14 9.53v-.06A4.45 4.45 0 0 1 10.53 6z"
      />
      <path
        fill="currentColor"
        d="M18 4.067A2.65 2.65 0 0 1 15.933 2h-.866A2.65 2.65 0 0 1 13 4.067v.866A2.65 2.65 0 0 1 15.067 7h.866A2.65 2.65 0 0 1 18 4.933z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17 9v13H2V7h4M17 15.5v-2l3.5-4H22v10h-1.5z"
      />
    </svg>
  );
};
export default VideoCameraAi;
