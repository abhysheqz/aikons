import React from "react";
const ComputerTerminal_01: React.FC<
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
        d="M2.25 2.25h19.5v19.5H2.25zM7 5.586 10.414 9 7 12.414 5.586 11l2-2-2-2zM16 10h-5v2h5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ComputerTerminal_01;
