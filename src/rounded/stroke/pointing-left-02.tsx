import React from "react";
const PointingLeft_02: React.FC<
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
        d="M22 19.892h-1.618c-.926 0-1.894.724-2.693 1.106-1.477.707-4.366 1.675-5.727.323C9.817 19.189 9.424 16.208 9.5 14.5H3.75a1.75 1.75 0 1 1 0-3.5H10m0 0h4m-4 0c.018-.024 2.175-2.878 3.609-3.376 1.283-.446 2.425.408 3.482 1.05.82.498 2.84 2.326 3.914 2.326H22M2 4.5h6m-6 0C2 3.8 3.994 2.492 4.5 2M2 4.5C2 5.2 3.994 6.508 4.5 7"
      />
    </svg>
  );
};
export default PointingLeft_02;
