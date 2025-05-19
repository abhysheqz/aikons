import React from "react";
const Sheriff_01: React.FC<
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
        d="M2 8c3.476 5.333 16.524 5.333 20 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m5 10 2.125-7.008c.644-2.122 2.15-.273 3.472.348a3.34 3.34 0 0 0 2.807 0c1.32-.621 2.827-2.47 3.471-.348L19 10M19 11c0 2.808-.303 5.46-2.569 7.012C14.587 19.275 10.857 19.338 10 22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 11c0 2.808.303 5.46 2.569 7.012C9.413 19.275 13.143 19.338 14 22"
      />
    </svg>
  );
};
export default Sheriff_01;
