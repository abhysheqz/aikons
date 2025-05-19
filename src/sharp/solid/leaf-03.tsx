import React from "react";
const Leaf_03: React.FC<
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
        d="M21.229 3.944a31 31 0 0 0-.065-1.108c-.255-.032-.966-.06-1.108-.065a35.844 35.844 0 0 0-5.095.189c-1.509.167-3.165.463-4.708.977-1.537.513-3.011 1.258-4.108 2.356A8.177 8.177 0 0 0 5.638 17.3L15.5 7.439 16.56 8.5 6.7 18.362a8.177 8.177 0 0 0 11.007-.507c1.098-1.097 1.843-2.57 2.356-4.108.514-1.543.81-3.2.977-4.708a36 36 0 0 0 .189-5.095M5.638 17.301 2.75 20.19l1.06 1.06 2.89-2.888A8.3 8.3 0 0 1 5.637 17.3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Leaf_03;
