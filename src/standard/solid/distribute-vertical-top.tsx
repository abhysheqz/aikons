import React from "react";
const DistributeVerticalTop: React.FC<
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
        d="M22 2a1 1 0 0 0-1-1H3a1 1 0 1 0 0 2h18a1 1 0 0 0 1-1M22 13.5a1 1 0 0 0-1-1H3a1 1 0 1 0 0 2h18a1 1 0 0 0 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18 22.5a1.75 1.75 0 0 0 1.75-1.75v-3A1.75 1.75 0 0 0 18 16H6a1.75 1.75 0 0 0-1.75 1.75v3c0 .966.783 1.75 1.75 1.75zM15 11a1.75 1.75 0 0 0 1.75-1.75v-3A1.75 1.75 0 0 0 15 4.5H9a1.75 1.75 0 0 0-1.75 1.75v3c0 .966.783 1.75 1.75 1.75z"
      />
    </svg>
  );
};
export default DistributeVerticalTop;
