import React from "react";
const LessThan: React.FC<
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
        d="m16.663 3 1.562 1.952L9.752 12l8.497 7.048L16.688 21 5.75 12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LessThan;
