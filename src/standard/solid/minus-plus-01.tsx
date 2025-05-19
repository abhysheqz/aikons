import React from "react";
const MinusPlus_01: React.FC<
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
        d="M12 6a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V7a1 1 0 0 1 1-1M20 3a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h14a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MinusPlus_01;
