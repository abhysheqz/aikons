import React from "react";
const Unavailable: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 12c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11m3.968-5.618a9 9 0 0 0 12.65 12.65zm1.414-1.414 12.65 12.65a9 9 0 0 0-12.65-12.65"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Unavailable;
