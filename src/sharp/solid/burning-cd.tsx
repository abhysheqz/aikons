import React from "react";
const BurningCd: React.FC<
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
        d="M19.813 12A5.81 5.81 0 0 0 14 6.188V4.25a7.75 7.75 0 0 1 0 15.5v-1.937A5.81 5.81 0 0 0 19.813 12"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h11a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zM10 10v4h2v-4z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M14 15a3 3 0 1 0 0-6z" />
    </svg>
  );
};
export default BurningCd;
