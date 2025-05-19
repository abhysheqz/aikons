import React from "react";
const ArrowRight_02: React.FC<
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
        d="M15.707 6.293a1 1 0 1 0-1.414 1.414L17.586 11H4a1 1 0 1 0 0 2h13.586l-3.293 3.293a1 1 0 0 0 1.414 1.414l4.995-4.995.053-.056a1 1 0 0 0 .245-.653v-.013a1 1 0 0 0-.293-.697z"
      />
    </svg>
  );
};
export default ArrowRight_02;
