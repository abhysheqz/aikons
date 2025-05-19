import React from "react";
const Pen_01: React.FC<
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
        d="M18.712 3.409a2.25 2.25 0 0 0-3.182 0l-2.03 2.03 5.06 5.06 2.03-2.03a2.25 2.25 0 0 0 0-3.181zM17.5 11.56 12.44 6.5l-9.031 9.03a2.25 2.25 0 0 0-.659 1.591V20.5c0 .414.336.75.75.75h3.379a2.25 2.25 0 0 0 1.59-.659z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pen_01;
