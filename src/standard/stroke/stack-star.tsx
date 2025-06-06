import React from "react";
const StackStar: React.FC<
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
        d="M16 6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.574 10.242c.177-.323.675-.323.852 0l1.046 1.906c.07.127.2.215.35.237l2.275.336c.385.057.539.496.263.752l-1.628 1.515a.43.43 0 0 0-.134.383l.36 2.115c.06.358-.342.63-.69.465l-2.05-.97a.51.51 0 0 0-.435 0l-2.05.97c-.349.164-.75-.107-.69-.465l.359-2.115a.43.43 0 0 0-.134-.383L5.64 13.474c-.275-.256-.122-.695.263-.752l2.274-.336a.48.48 0 0 0 .351-.237z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 6V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2"
      />
    </svg>
  );
};
export default StackStar;
