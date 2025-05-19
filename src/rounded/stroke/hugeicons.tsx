import React from "react";
const Hugeicons: React.FC<
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
        d="M2 9.5h20M20.5 9.5h-17l.734 5.868c.364 2.92.547 4.38 1.54 5.256.992.876 2.463.876 5.406.876h1.64c2.943 0 4.414 0 5.407-.876.992-.876 1.174-2.336 1.54-5.256zM5 9c0-3.59 3.134-6.5 7-6.5s7 2.91 7 6.5"
      />
    </svg>
  );
};
export default Hugeicons;
