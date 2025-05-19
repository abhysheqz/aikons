import React from "react";
const MusicNote_02: React.FC<
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
        d="M11 7.137V17m0-9.863c1.893 1.68 3.57 2.867 5.006 3.545.688.324 1.31.386 2.014.073A5.04 5.04 0 0 0 21 6.15c-1.928 1.36-4.312.622-6.315-.645-1.64-1.036-2.46-1.554-2.828-1.501a.87.87 0 0 0-.613.33C11 4.612 11 5.454 11 7.137M11 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
      />
    </svg>
  );
};
export default MusicNote_02;
