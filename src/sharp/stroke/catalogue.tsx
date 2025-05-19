import React from "react";
const Catalogue: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M5.5 12.5H9m-3.5 4h6M14.5 7.5v14h-12v-14zm0 0-5-5m0 0h12v14h-7m-5-14v5"
      />
    </svg>
  );
};
export default Catalogue;
