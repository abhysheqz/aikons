import React from "react";
const Mouse_09: React.FC<
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
        d="M12 22c6 0 7.5-4.51 7.5-10S18 2 12 2 4.5 6.51 4.5 12 6 22 12 22ZM12 9V5"
      />
    </svg>
  );
};
export default Mouse_09;
