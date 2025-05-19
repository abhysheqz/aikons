import React from "react";
const Labs: React.FC<
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
        d="M10 3a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1M12 7a1 1 0 0 1 1-1h2.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 4v6h5V4zm-1-2h7a1 1 0 0 1 1 1v14.5a4.5 4.5 0 1 1-9 0V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.603 10.364a.75.75 0 0 1 .795 0l.002.001.003.003.012.007.04.026.14.094a13.12 13.12 0 0 1 1.944 1.64c1.04 1.072 2.211 2.691 2.211 4.615 0 2.718-2.084 5-4.75 5s-4.75-2.282-4.75-5c0-1.924 1.171-3.543 2.212-4.616a13 13 0 0 1 2.083-1.733l.04-.026.012-.007.003-.003z"
      />
    </svg>
  );
};
export default Labs;
