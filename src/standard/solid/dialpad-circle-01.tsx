import React from "react";
const DialpadCircle_01: React.FC<
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
        d="M2 4.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M2 11.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M2 18.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M9 4.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M9 11.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M9 18.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M16 4.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M16 11.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M16 18.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DialpadCircle_01;
