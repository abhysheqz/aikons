import React from "react";
const Prism_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.58 8-.593-1.15C13.664 4.283 13.002 3 12 3s-1.664 1.283-2.987 3.85L4.59 15.427c-1.28 2.481-1.92 3.721-1.423 4.647S4.97 21 7.578 21h8.844c2.609 0 3.913 0 4.41-.926.496-.926-.143-2.166-1.422-4.647l-.35-.678M8 10l14-3M8 10l13.462 1.5M8 10l14 6M8 10l-6 1"
      />
    </svg>
  );
};
export default Prism_01;
