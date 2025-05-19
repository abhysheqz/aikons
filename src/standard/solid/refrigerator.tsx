import React from "react";
const Refrigerator: React.FC<
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
        d="M7 1.25A2.75 2.75 0 0 0 4.25 4v5h15.5V4A2.75 2.75 0 0 0 17 1.25zM19.75 11H4.25v11c0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75zM8 4.5a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1m1 9a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Refrigerator;
