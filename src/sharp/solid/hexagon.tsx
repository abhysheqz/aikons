import React from "react";
const Hexagon: React.FC<
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
        d="M11.636 1.344a.75.75 0 0 1 .728 0l9 5A.75.75 0 0 1 21.75 7v10a.75.75 0 0 1-.386.656l-9 5a.75.75 0 0 1-.728 0l-9.002-5A.75.75 0 0 1 2.248 17V7a.75.75 0 0 1 .386-.656z"
      />
    </svg>
  );
};
export default Hexagon;
