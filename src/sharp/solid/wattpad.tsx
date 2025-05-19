import React from "react";
const Wattpad: React.FC<
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
        d="M6.2 6.24c1.6.792 1.334 2.968 1 3.957 2.05-4.169 7.851-8.66 7.851-1.175.502-.84 2.008-2.722 4.016-3.522 2.51-1 4.39 1 1.396 4 0 0-1.497 1.5-2.994 4.5s-5.489 6-6.768-.836c-3.501 8.903-7.502 6.43-8.502.495s2-8.408 4-7.419"
      />
    </svg>
  );
};
export default Wattpad;
