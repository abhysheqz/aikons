import React from "react";
const Tick_03: React.FC<
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
        d="M9 13.5 18.5 4 22 7.5 9.059 20 2 13.353 5 10z"
      />
    </svg>
  );
};
export default Tick_03;
