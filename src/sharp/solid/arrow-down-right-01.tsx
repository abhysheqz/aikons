import React from "react";
const ArrowDownRight_01: React.FC<
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
        d="M15.586 17H11v2h8v-8h-2v4.586L6.414 5 5 6.414z"
      />
    </svg>
  );
};
export default ArrowDownRight_01;
