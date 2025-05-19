import React from "react";
const RightToLeftListDash: React.FC<
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
        d="M3 4h12v2H3zM18 4h3v2h-3zM3 11h12v2H3zM18 11h3v2h-3zM3 18h12v2H3zM18 18h3v2h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RightToLeftListDash;
