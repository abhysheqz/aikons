import React from "react";
const SecondBracket: React.FC<
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
        d="M2 5a3 3 0 0 1 3-3h1.5a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h1.5a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3zm14.5-2a1 1 0 0 1 1-1H19a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-1.5a1 1 0 1 1 0-2H19a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-1.5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SecondBracket;
