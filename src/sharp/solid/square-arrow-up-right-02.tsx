import React from "react";
const SquareArrowUpRight_02: React.FC<
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
        d="M22.25 1.75H1.75v20.5h20.5zM17 7H9v2h4.586l-7 7L8 17.414l7-7V15h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowUpRight_02;
