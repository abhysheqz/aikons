import React from "react";
const Minimize_01: React.FC<
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
        d="M19.899 21.878v-2c.565-1.155 2.011-3.353 2.1-5.45.164-1.807-1.023-2.44-2.199-3.229-1.437-.804-2.631-1.097-4.095-1.178l1.054-5.028a1.72 1.72 0 0 0-3.336-.829l-2.088 9.644-2.412-1.653c-.817-.608-1.738-.702-2.507.08-.582.667-.545 1.537.027 2.19l4.419 5.473v1.989M2.01 9.877l3.198-3.128m-3.198.125h2.992v3.002m5.018-7.993-2.847 2.84m-.156-2.838V4.88h2.988"
      />
    </svg>
  );
};
export default Minimize_01;
