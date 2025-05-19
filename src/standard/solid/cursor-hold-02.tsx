import React from "react";
const CursorHold_02: React.FC<
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
        d="m1.25 1.25 17.5 6.806-7.778 2.916-2.916 7.778z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.5 12.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m-.45 6.761 2.86-2.86-1.06-1.061-2.86 2.86z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CursorHold_02;
