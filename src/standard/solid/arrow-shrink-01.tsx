import React from "react";
const ArrowShrink_01: React.FC<
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
        d="M2.293 2.293a1 1 0 0 1 1.414 0L9.5 8.086V5.5a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h2.586L2.293 3.707a1 1 0 0 1 0-1.414M12.5 13.5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-2.586l5.793 5.793a1 1 0 1 1-1.414 1.414L14.5 15.914V18.5a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowShrink_01;
