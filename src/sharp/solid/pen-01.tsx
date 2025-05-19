import React from "react";
const Pen_01: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="m21.25 7.81-5.06-5.061-2.69 2.69 5.06 5.061zm-3.75 3.75L12.439 6.5 2.75 16.19v5.06h5.061z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pen_01;
