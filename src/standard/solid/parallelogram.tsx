import React from "react";
const Parallelogram: React.FC<
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
        d="M5.084 4.576A1.75 1.75 0 0 1 6.782 3.25h13.939a1.75 1.75 0 0 1 1.697 2.174l-3.5 14a1.75 1.75 0 0 1-1.697 1.326H3.282a1.75 1.75 0 0 1-1.698-2.174z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Parallelogram;
