import React from "react";
const Customize: React.FC<
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
        d="M13 13.25H3a.75.75 0 0 0-.75.75v7c0 .414.336.75.75.75h10zM15 21.75h6a.75.75 0 0 0 .75-.75v-7a.75.75 0 0 0-.75-.75h-6zM9 2.25H3a.75.75 0 0 0-.75.75v7c0 .414.336.75.75.75h6zM11 10.75h10a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75H11z"
      />
    </svg>
  );
};
export default Customize;
