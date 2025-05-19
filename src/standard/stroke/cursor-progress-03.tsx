import React from "react";
const CursorProgress_03: React.FC<
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
        d="m3.1 2.53 15.117 5.815a.44.44 0 0 1-.018.83l-6.56 2.186a.44.44 0 0 0-.278.278L9.174 18.2a.44.44 0 0 1-.83.018L2.53 3.1a.44.44 0 0 1 .57-.57Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.259 13.53a4.2 4.2 0 0 0-1.018 0m1.018 7.94a4.2 4.2 0 0 1-1.018 0m4.259-5.52a4 4 0 0 0-.509-.867m-6.482 4.835a4 4 0 0 1-.509-.866m.508-3.97a4 4 0 0 0-.508.867m7.5 3.103a4 4 0 0 1-.509.866"
      />
    </svg>
  );
};
export default CursorProgress_03;
