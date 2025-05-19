import React from "react";
const WifiConnected_03: React.FC<
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
        d="M11.5 6c-3.457 0-6.868 1.264-10 3.714l1.314 1.51C5.625 9.05 8.584 8 11.5 8zM14.54 17.707c-1.608-1.61-4.474-1.61-6.083 0l-1.315-1.51c2.37-2.262 6.343-2.262 8.714 0z"
      />
      <path
        fill="currentColor"
        d="M18.523 13.133 17.21 14.64c-3.32-2.841-7.847-2.87-11.42.004l-1.313-1.51c4.297-3.497 9.938-3.529 14.046-.002M11.5 19a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m22.5 4.345-5.705 6.275-2.741-2.741 1.414-1.414 1.259 1.258L21.02 3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WifiConnected_03;
