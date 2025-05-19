import React from "react";
const PineTree: React.FC<
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
        d="M18.532 9.252 12 1.251 5.469 9.252h2.515l-3.534 4.5H7.21l-3.71 5h7.488v3.999h2v-3.999h7.512l-3.71-5h2.76l-3.533-4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PineTree;
