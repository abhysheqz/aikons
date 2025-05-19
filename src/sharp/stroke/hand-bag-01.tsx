import React from "react";
const HandBag_01: React.FC<
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
        d="M15.997 11c0-6-2.135-9-4-9s-4 3-4 9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.997 13.5h-4v3h4z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.997 9h14.006v6L21 21.987a.01.01 0 0 1-.01.013H3.01a.01.01 0 0 1-.01-.013L4.997 15zM19.039 14.999h-5.047m-3.98 0H5.009"
      />
    </svg>
  );
};
export default HandBag_01;
