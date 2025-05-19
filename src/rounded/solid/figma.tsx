import React from "react";
const Figma: React.FC<
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
      <circle cx={15.5} cy={12.164} r={3.5} fill="currentColor" />
      <path
        fill="currentColor"
        d="M8.333 2h7.334a3.333 3.333 0 1 1 0 6.667H12v9.667a3.667 3.667 0 0 1-3.667 3.667 3.333 3.333 0 0 1 0-6.667 3.333 3.333 0 0 1 0-6.667 3.333 3.333 0 0 1 0-6.667"
      />
    </svg>
  );
};
export default Figma;
