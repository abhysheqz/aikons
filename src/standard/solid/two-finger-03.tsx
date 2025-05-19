import React from "react";
const TwoFinger_03: React.FC<
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
        d="M11.52 3.078c0-.736.608-1.332 1.357-1.332.75 0 1.357.596 1.357 1.332v9.493a.397.397 0 0 0 .794 0V9.66h1.409c.567 0 1.051.356 1.23.854q.074.2.075.427v2.245a.397.397 0 0 0 .794 0v-2.412h1.409c.72 0 1.305.574 1.305 1.281v7.241c0 1.63-1.347 2.952-3.008 2.952H8.978a2 2 0 0 1-1.717-.974L3.08 14.273l-.012-.016a1.61 1.61 0 0 1 .03-1.96 1.563 1.563 0 0 1 2.246-.217l1.909 1.911a.45.45 0 0 0 .768-.318V5.632q0-.045-.009-.09v-.199c0-.764.616-1.369 1.357-1.369s1.357.605 1.357 1.37v6.113a.397.397 0 0 0 .794 0z"
      />
    </svg>
  );
};
export default TwoFinger_03;
