import React from "react";
const Film_02: React.FC<
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
        d="M1.5 4.5a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1V7H6V3.5zm13.5 0V7h2.5V4.5a1 1 0 0 0-1-1zM20.5 17H18v3.5h1.5a1 1 0 0 0 1-1zM6 20.5V17H3.5v2.5a1 1 0 0 0 1 1zM8 11V3.5h8V11zm8 2v7.5H8V13z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Film_02;
