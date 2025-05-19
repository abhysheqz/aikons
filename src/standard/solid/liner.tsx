import React from "react";
const Liner: React.FC<
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
        d="M21.747 3.336a1 1 0 0 1-.083 1.411l-18 16a1 1 0 1 1-1.328-1.494l18-16a1 1 0 0 1 1.411.083"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Liner;
