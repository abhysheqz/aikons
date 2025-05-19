import React from "react";
const BlackHole: React.FC<
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
        d="M20.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM3.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM22 12l-5.479-2.138a5 5 0 0 0-9.042 0L2 12l5.479 2.138a5 5 0 0 0 9.042 0z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM15 2.458A10 10 0 0 0 12 2a9.99 9.99 0 0 0-8 4m5 15.542A10 10 0 0 0 12 22a9.99 9.99 0 0 0 8-3.999"
      />
    </svg>
  );
};
export default BlackHole;
