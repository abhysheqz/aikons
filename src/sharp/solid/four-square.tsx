import React from "react";
const FourSquare: React.FC<
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
        d="M22.747 1.75h-20.5v20.5h20.5zm-8.25 9.75h-3.806L12.242 6h-2.079l-1.666 5.854V13.5h6V18h2V6h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FourSquare;
