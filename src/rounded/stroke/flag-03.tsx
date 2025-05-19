import React from "react";
const Flag_03: React.FC<
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
        d="M15.879 3h-5.596C7.32 3 5.84 3 4.92 3.879 4 4.757 4 6.172 4 9l.106 6H15.88c2.223 0 3.334 0 3.806-.575.13-.158.226-.34.28-.536.199-.705-.468-1.554-1.802-3.253h0c-.555-.706-.832-1.06-.882-1.46a1.4 1.4 0 0 1 0-.351c.05-.402.327-.755.882-1.461h0c1.334-1.699 2-2.548 1.803-3.253a1.5 1.5 0 0 0-.281-.537C19.213 3 18.102 3 15.879 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4 21V8"
      />
    </svg>
  );
};
export default Flag_03;
