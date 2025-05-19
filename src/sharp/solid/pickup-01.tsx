import React from "react";
const Pickup_01: React.FC<
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
        d="M4.5 17.75a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M14.5 17.75a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.461 4.033a.96.96 0 0 1 .682-.283H16c.282 0 .549.123.732.338l5.786 6.766c.15.175.232.399.232.63v2.266H21v1.5h1.75v2.033a.965.965 0 0 1-.964.967h-1.069q.033-.245.033-.5a3.75 3.75 0 1 0-7.467.5h-2.566q.033-.245.033-.5a3.75 3.75 0 1 0-7.467.5H2a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75h9.179V4.717c0-.257.101-.503.282-.684m1.644 1.65h2.45l4.332 5.067h-3.799z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pickup_01;
