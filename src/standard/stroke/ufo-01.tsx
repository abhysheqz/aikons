import React from "react";
const Ufo_01: React.FC<
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
        d="M3.36 12.2 6 10h12l2.64 2.2a1 1 0 0 1 .36.768v.064a1 1 0 0 1-.36.768L18 16H6l-2.64-2.2a1 1 0 0 1-.36-.768v-.064a1 1 0 0 1 .36-.768M8.012 13H8m4.006 0h-.012M16 13h-.012M18 10a6 6 0 0 0-12 0M18 16l.772 2.316a1 1 0 0 0 .949.684H21M6 16l-.772 2.316a1 1 0 0 1-.949.684H3"
      />
    </svg>
  );
};
export default Ufo_01;
