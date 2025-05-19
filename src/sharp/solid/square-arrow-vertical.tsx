import React from "react";
const SquareArrowVertical: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm12.53 6.22-3.531-3.53-3.53 3.53 1.06 1.06 1.72-1.72v8.38l-1.72-1.72-1.06 1.06 3.53 3.53 3.53-3.53-1.06-1.06-1.72 1.72V7.81l1.72 1.72z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowVertical;
