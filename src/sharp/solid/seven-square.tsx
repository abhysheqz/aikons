import React from "react";
const SevenSquare: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.747 1.75h-20.5v20.5h20.5zM8.497 6v2h5.704L9.997 18h2.156l4.344-10.298V6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SevenSquare;
