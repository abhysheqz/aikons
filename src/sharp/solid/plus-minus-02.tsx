import React from "react";
const PlusMinus_02: React.FC<
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
        d="M22 3.768 3.768 22 2 20.232 20.232 2zM5.75 5.75V3h2.5v2.75H11v2.5H8.25V11h-2.5V8.25H3v-2.5zM13 16.75h8v2.5h-8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PlusMinus_02;
