import React from "react";
const Fencing: React.FC<
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
        d="m6.887 15.6-4.164 2.99q-.232.165-.417.383c-.972 1.145.58 2.693 1.724 1.72q.213-.182.376-.41l2.978-4.184m1.628-2.093c-1.956-1.96-4.069-.352-4.069-.352l4.372 4.38s1.654-2.068-.303-4.028m0 0L20 3M17.113 15.6l4.164 2.99q.232.165.417.383c.972 1.145-.58 2.693-1.724 1.72a2.3 2.3 0 0 1-.376-.41l-2.979-4.184m-1.627-2.093c1.956-1.96 4.069-.352 4.069-.352l-2.21 2.214-2.162 2.165s-1.654-2.067.303-4.027m0 0L4 3"
      />
    </svg>
  );
};
export default Fencing;
