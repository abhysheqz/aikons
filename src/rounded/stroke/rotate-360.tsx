import React from "react";
const Rotate_360: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.437 12.506c2.985-5.503 1.624-9.24-3.482-9.506-3.712.07-7.54 2.07-10.596 5.164-2.565 2.597-5.09 6.315-4.163 9.854.205.781.604 1.314 1.234 1.815 1.694 1.346 3.357 1.465 6.56.678 3.244-.985 5.255-2.47 6.95-3.99m0 0q.003-.001.006-.004.003-.006-.004-.008a.01.01 0 0 0-.004.006zm0 0c.37 1.096.136 2.073-.502 3.99"
      />
    </svg>
  );
};
export default Rotate_360;
