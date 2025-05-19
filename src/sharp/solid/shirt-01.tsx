import React from "react";
const Shirt_01: React.FC<
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
        d="M6 2.25a.75.75 0 0 0-.586.281l-4 5a.75.75 0 0 0 .056 1l3.78 3.78v9.439h13.5v-9.44l3.78-3.78a.75.75 0 0 0 .056-.999l-4-5A.75.75 0 0 0 18 2.25h-3.75V3a2.25 2.25 0 0 1-4.5 0v-.75z"
      />
    </svg>
  );
};
export default Shirt_01;
