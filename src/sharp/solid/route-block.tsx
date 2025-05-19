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
        d="m16.57 5-2.32-2.32 1.43-1.43L18 3.57l2.32-2.32 1.43 1.43L19.43 5l2.32 2.32-1.43 1.43L18 6.43l-2.32 2.32-1.43-1.43z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.25 19a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 8.5A4.5 4.5 0 0 1 8.5 4H12v2H8.5a2.5 2.5 0 0 0 0 5h7a4.5 4.5 0 1 1 0 9H12v-2h3.5a2.5 2.5 0 0 0 0-5h-7A4.5 4.5 0 0 1 4 8.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RouteBlock;
