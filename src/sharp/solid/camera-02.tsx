import React from "react";
const Camera_02: React.FC<
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
        d="M8.33 1.665A.75.75 0 0 1 9 1.25h6a.75.75 0 0 1 .67.415l1.793 3.585h4.538a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V6A.75.75 0 0 1 2 5.25h4.536zM16 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-3-9h-2v2h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Camera_02;
