import React from "react";
const Cancel_01: React.FC<
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
        d="m12 10.262 6.012-6.012 1.738 1.738L13.738 12l6.012 6.012-1.738 1.738L12 13.738 5.988 19.75 4.25 18.012 10.262 12 4.25 5.988 5.988 4.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cancel_01;
