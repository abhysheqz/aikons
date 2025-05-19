import React from "react";
const Speaker_01: React.FC<
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
        d="M3.25 5A3.75 3.75 0 0 1 7 1.25h10A3.75 3.75 0 0 1 20.75 5v14A3.75 3.75 0 0 1 17 22.75H7A3.75 3.75 0 0 1 3.25 19zm4.5 9.25a4 4 0 1 1 8 0 4 4 0 0 1-8 0M9.5 5a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Speaker_01;
