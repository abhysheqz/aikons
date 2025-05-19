import React from "react";
const LeftToRightListDash: React.FC<
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
        d="M21 6H9V4h12zM6 6H3V4h3zM21 13H9v-2h12zM6 13H3v-2h3zM21 20H9v-2h12zM6 20H3v-2h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LeftToRightListDash;
