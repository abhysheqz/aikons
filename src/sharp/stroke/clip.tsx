import React from "react";
const Clip: React.FC<
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
        d="M2 22h5.5v-.5a1.5 1.5 0 0 1 3 0v.5h3v-.5a1.5 1.5 0 0 1 3 0v.5H22"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m4 22-1.571-8.642A2 2 0 0 1 4.396 11h15.208a2 2 0 0 1 1.967 2.358L20 22"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m9 20 1-12-2-5s1.2-1 4-1 4 1 4 1l-2 5 1 12"
      />
    </svg>
  );
};
export default Clip;
