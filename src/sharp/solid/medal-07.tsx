import React from "react";
const Medal_07: React.FC<
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
        d="M20.75 1.25h-8v7.787a7.46 7.46 0 0 1 3.592 1.347l4.408-1.89zm-17.5 0h8v7.787a7.46 7.46 0 0 0-3.592 1.347L3.25 8.494zm2.5 15.25a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0m4 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Medal_07;
