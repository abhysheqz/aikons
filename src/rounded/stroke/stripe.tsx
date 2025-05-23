import React from "react";
const Stripe: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.25 4v4.5c-4.258-1.725-6.586-1.418-6.702-.358s1.42 1.68 2.202 1.858c0 0 5.5 1 5.5 5.5s-5 5.5-7.5 5.5c-2 0-4.167-.802-5-1.135v-4.702c.8.456 2.82 1.4 4.5 1.533 2.1.166 2.662-.32 2.804-.932.26-1.117-1.612-1.77-2.804-2.264-3.2-1.2-4.5-2.5-4.5-5 0-4.5 4-5.5 6.5-5.5 2.4 0 4.333.667 5 1Z"
      />
    </svg>
  );
};
export default Stripe;
