import React from "react";
const Mouse_11: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 5.5V2m0 10V9M12.5 22c6 0 7.5-4.51 7.5-10S18.5 2 12.5 2 5 6.51 5 12s1.5 10 7.5 10Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 5.5h-3V9h3zM5.5 12h14"
      />
    </svg>
  );
};
export default Mouse_11;
