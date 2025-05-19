import React from "react";
const OneSquare: React.FC<
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
        d="M22.25 1.75H1.75v20.5h20.5zM13.5 6h-1.914l-2.5 2.5L10.5 9.914l1-1V18h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default OneSquare;
