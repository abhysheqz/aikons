import React from "react";
const CoinsYen: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM3.157 11A7.111 7.111 0 0 0 13 20.843M11.5 6.5 14 9.611m0 0L16.5 6.5M14 9.611V14.5m2.5-3h-5"
      />
    </svg>
  );
};
export default CoinsYen;
