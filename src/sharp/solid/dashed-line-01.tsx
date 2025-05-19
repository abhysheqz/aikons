import React from "react";
const DashedLine_01: React.FC<
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
        d="M21 13h-3.5v-2H21zM16 13h-3.5v-2H16zM11 13H7.5v-2H11zM6 13H3v-2h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DashedLine_01;
