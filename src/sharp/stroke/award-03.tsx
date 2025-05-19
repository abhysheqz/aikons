import React from "react";
const Award_03: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 22v-4H6v4M4 22h16"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.371 2.004 6.5 5.484l2.109 12.433a.1.1 0 0 0 .099.083h6.577a.1.1 0 0 0 .098-.08l3.115-15.8a.1.1 0 0 0-.127-.116Z"
      />
    </svg>
  );
};
export default Award_03;
