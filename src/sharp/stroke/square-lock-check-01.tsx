import React from "react";
const SquareLockCheck_01: React.FC<
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
        strokeWidth={1.5}
        d="m13.992 20 1.999 2 5.995-6m-7.478-6.993V6.53c0-2.566-1.946-4.532-4.382-4.532S5.552 3.965 5.552 6.531l-.12 2.476m12.566 5.02v-5.02H1.991L1.992 22h9.021"
      />
    </svg>
  );
};
export default SquareLockCheck_01;
