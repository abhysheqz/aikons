import React from "react";
const PointingRight_05: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 4.5h5.133M19.5 2 22 4.5 19.5 7M2 20h1.5l1.405 1.123A4 4 0 0 0 7.403 22H11.5a2 2 0 0 0 2-2v-1M2 10h1.5l6.664-4.611a1.74 1.74 0 0 1 2.183-.008c.769.614.875 1.741.234 2.487L10.501 10h10a1.5 1.5 0 0 1 0 3h-5m0 0h-2m2 0v1a2 2 0 0 1-2 2h-1m-1 3h1a2 2 0 0 0 2-2v-1"
      />
    </svg>
  );
};
export default PointingRight_05;
