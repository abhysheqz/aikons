import React from "react";
const CheckmarkSquare_02: React.FC<
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
        d="M4.75 2A2.75 2.75 0 0 0 2 4.75v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15A2.75 2.75 0 0 0 19.75 2zm12.268 7.89a1 1 0 1 0-1.536-1.28l-4.3 5.159-1.725-1.726a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.475-.067z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CheckmarkSquare_02;
