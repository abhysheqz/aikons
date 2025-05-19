import React from "react";
const MoreVerticalCircle_02: React.FC<
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
        d="M12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12 17.937 22.75 12 22.75m1.25-14.493V5.75h-2.5v2.507zm0 2.486v2.506h-2.5v-2.506zm0 5v2.507h-2.5v-2.507z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoreVerticalCircle_02;
