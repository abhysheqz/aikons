import React from "react";
const DistributeVerticalBottom: React.FC<
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
        d="M6 12.5a1.75 1.75 0 0 0-1.75 1.75v3c0 .966.783 1.75 1.75 1.75h12a1.75 1.75 0 0 0 1.75-1.75v-3A1.75 1.75 0 0 0 18 12.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 21.5a1 1 0 0 0 1 1h18a1 1 0 1 0 0-2H3a1 1 0 0 0-1 1M2 10a1 1 0 0 0 1 1h18a1 1 0 1 0 0-2H3a1 1 0 0 0-1 1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9 1a1.75 1.75 0 0 0-1.75 1.75v3c0 .966.783 1.75 1.75 1.75h6a1.75 1.75 0 0 0 1.75-1.75v-3A1.75 1.75 0 0 0 15 1z"
      />
    </svg>
  );
};
export default DistributeVerticalBottom;
