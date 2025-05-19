import React from "react";
const ArrowUp_02: React.FC<
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
        d="M11.634 3.069a1 1 0 0 0-.341.224l-5 5a1 1 0 1 0 1.414 1.414L11 6.414V20a1 1 0 1 0 2 0V6.414l3.293 3.293a1 1 0 1 0 1.414-1.414l-4.995-4.995a1 1 0 0 0-.31-.214 1 1 0 0 0-.768-.015"
      />
    </svg>
  );
};
export default ArrowUp_02;
