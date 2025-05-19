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
        strokeWidth={1.5}
        d="m2.5 2.5 16 6.222-7.111 2.667L8.722 18.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M18.259 13.53a4.2 4.2 0 0 0-1.018 0m1.018 7.94a4.2 4.2 0 0 1-1.018 0m4.259-5.52a4 4 0 0 0-.509-.867m-6.482 4.835a4 4 0 0 1-.509-.866m.508-3.97a4 4 0 0 0-.508.867m7.5 3.103a4 4 0 0 1-.509.866"
      />
    </svg>
  );
};
export default CursorProgress_03;
