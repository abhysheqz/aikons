import React from "react";
const Zap: React.FC<
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
        d="M8.816 2.692A.75.75 0 0 1 9.5 2.25H18a.75.75 0 0 1 .651 1.122L15.292 9.25H19a.75.75 0 0 1 .53 1.28l-11 11a.75.75 0 0 1-1.258-.712L9.04 13.75H5a.75.75 0 0 1-.684-1.058z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Zap;
