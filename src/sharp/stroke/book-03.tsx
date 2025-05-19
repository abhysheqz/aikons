import React from "react";
const Book_03: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.012 18.02-1-2.002m0 0-2.003-4.005-2.002 4.005m4.004 0h-4.004M9.006 18.02l1-2.002"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.507 2.012H6.633c-1.242 0-3.279.893-3.105 3.26m0 0c.174 2.367 2.156 2.753 3.105 2.753H17.51M3.528 5.272V18.56c-.115 1.064.317 3.282 3.055 3.452H20.48V8.025h-2.97m0 0V5.007a.01.01 0 0 0-.01-.01H6.508"
      />
    </svg>
  );
};
export default Book_03;
