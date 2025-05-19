import React from "react";
const RouteBlock: React.FC<
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
        d="M14.525 1.525a.937.937 0 0 1 1.325 0L18 3.675l2.15-2.15a.937.937 0 1 1 1.325 1.326L19.325 5l2.15 2.149a.938.938 0 0 1-1.325 1.326L18 6.326l-2.15 2.15a.937.937 0 1 1-1.325-1.326L16.675 5l-2.15-2.15a.94.94 0 0 1 0-1.325"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.25 19a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 8.5A4.5 4.5 0 0 1 8.5 4H12a1 1 0 1 1 0 2H8.5a2.5 2.5 0 0 0 0 5h7a4.5 4.5 0 1 1 0 9H12a1 1 0 1 1 0-2h3.5a2.5 2.5 0 0 0 0-5h-7A4.5 4.5 0 0 1 4 8.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RouteBlock;
