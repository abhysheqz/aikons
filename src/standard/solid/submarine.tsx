import React from "react";
const Submarine: React.FC<
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
        d="M10.829 9.726a2 2 0 0 1 1.788-1.105h2.763a2 2 0 0 1 1.789 1.105l1.223 2.445a1 1 0 0 1-1.79.895L15.38 10.62h-2.763l-1.223 2.444a1 1 0 1 1-1.788-.894z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.002 5.625a2 2 0 0 1 2-2h2a1 1 0 0 1 0 2h-2L15 9.59a1 1 0 0 1-2 0zM1.25 13.625c0-.966.784-1.75 1.75-1.75h.723c.317 0 .628.086.9.25L6.5 13.25l1.877-1.126a1.75 1.75 0 0 1 .9-.249H18.5a4.25 4.25 0 0 1 0 8.5H9.277a1.75 1.75 0 0 1-.9-.25L6.5 19l-1.877 1.126a1.75 1.75 0 0 1-.9.249H3a1.75 1.75 0 0 1-1.75-1.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Submarine;
