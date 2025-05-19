import React from "react";
const ArrowUp_03: React.FC<
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
        d="M6 3h12v2H6zM12 6.586l4.707 4.707-1.414 1.414L13 10.414V20h-2v-9.586l-2.293 2.293-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowUp_03;
