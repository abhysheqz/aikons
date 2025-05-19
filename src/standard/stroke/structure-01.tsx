import React from "react";
const Structure_01: React.FC<
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
        d="m2.008 21-.006-2.998a1 1 0 0 1 1-1.002h3.995a1 1 0 0 1 1 1.002L7.99 21"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 9v4m0 0H7a2 2 0 0 0-2 2v2m7-4h5a2 2 0 0 1 2 2v2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16.008 21-.006-2.998a1 1 0 0 1 1-1.002h3.995a1 1 0 0 1 1 1.002L21.991 21M16 8V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1"
      />
    </svg>
  );
};
export default Structure_01;
