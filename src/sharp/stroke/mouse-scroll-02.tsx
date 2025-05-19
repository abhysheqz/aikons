import React from "react";
const MouseScroll_02: React.FC<
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
        strokeWidth={1.5}
        d="M12 22c6 0 7.5-4.51 7.5-10S18 2 12 2 4.5 6.51 4.5 12 6 22 12 22Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.479 10.954 12.01 13l2.475-2.003m.038-3.007L12.01 6 9.479 7.99m2.531 4.411V6.586"
      />
    </svg>
  );
};
export default MouseScroll_02;
