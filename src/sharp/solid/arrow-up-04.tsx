import React from "react";
const ArrowUp_04: React.FC<
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
        d="M17.5 10.602 12.002 3.5 6.5 10.602H11V20.5h2v-9.898z"
      />
    </svg>
  );
};
export default ArrowUp_04;
