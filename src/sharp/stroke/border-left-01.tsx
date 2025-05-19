import React from "react";
const BorderLeft_01: React.FC<
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
        d="M7 3H3v18h4m10 0h4v-4M17 3h4v4m-6-4H9m0 18h6m6-12v6M12 3v4m0 10v4m-3-9h6m2 0h4m-9-3v6"
      />
    </svg>
  );
};
export default BorderLeft_01;
