import React from "react";
const Blockchain_01: React.FC<
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
        d="M20 7.5 12 3 4 7.5m16 0L12 12m8-4.5v9L12 21l-8-4.5v-9m8 4.5L4 7.5m8 4.5v8.235"
      />
    </svg>
  );
};
export default Blockchain_01;
