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
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M3 5h12M19 5h2M3 12h12M19 12h2M3 19h12M19 19h2"
      />
    </svg>
  );
};
export default RightToLeftListDash;
