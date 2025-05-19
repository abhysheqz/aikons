import React from "react";
const MaleSymbol: React.FC<
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
        d="M10 9a5 5 0 1 1 10 0 5 5 0 0 1-10 0m5-7a7 7 0 0 0-5.606 11.192L4 18.586V15a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H5.414l5.394-5.394A7 7 0 1 0 15 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MaleSymbol;
