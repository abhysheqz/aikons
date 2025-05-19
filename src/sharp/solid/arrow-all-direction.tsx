import React from "react";
const ArrowAllDirection: React.FC<
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
        d="m16.001 6-4-4-4 4 1.414 1.414 1.586-1.585v4.17h2V5.83l1.586 1.585zM16.001 18l-4 4-4-4 1.414-1.415 1.586 1.586V14h2v4.171l1.586-1.586zM18 16l4-4-4-4-1.415 1.414L18.171 11H14v2h4.171l-1.586 1.586zM6 16l-4-4 4-4 1.414 1.414L5.83 11h4.17v2H5.83l1.585 1.586z"
      />
    </svg>
  );
};
export default ArrowAllDirection;
