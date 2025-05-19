import React from "react";
const VkSquare: React.FC<
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
        d="M22.25 1.75H1.75v20.5h20.5zM15.1 12c.776-.45 2.9-2.5 3.4-5h-2c-.84 2.5-2.383 3.394-3.5 3.758V7h-2v7.417c-1.537-.941-2.394-2.291-2.882-3.533C7.81 10.097 7.5 9 7.5 7h-2c0 2 .378 3.653.757 4.616C7.017 13.55 9 16.499 13 16.999v-3.757c1.117.364 2.66 1.758 3.5 3.757h2C18 14.5 15.876 12.45 15.1 12"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VkSquare;
