import React from "react";
const LoyaltyCard: React.FC<
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
        d="M1.25 3.5A.75.75 0 0 1 2 2.75h20a.75.75 0 0 1 .75.75v17a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zm7.231 6.455c.148.06.28.129.393.196.114-.067.245-.135.393-.196.589-.24 1.421-.348 2.348.125 1.211.619 1.755 2.068 1.402 3.486-.362 1.449-1.616 2.83-3.891 3.64l-.252.09-.252-.09c-2.275-.81-3.53-2.191-3.89-3.64-.354-1.418.19-2.867 1.4-3.486.928-.473 1.76-.365 2.35-.125m10.894 5.341h-5v2h5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LoyaltyCard;
