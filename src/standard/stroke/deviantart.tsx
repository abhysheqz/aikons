import React from "react";
const Deviantart: React.FC<
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
        d="M19 6.5V2h-3.5l-3 4.5H5V11h4.5L5 17.5V22h3.5l3-4.5H19V13h-4.5z"
      />
    </svg>
  );
};
export default Deviantart;
