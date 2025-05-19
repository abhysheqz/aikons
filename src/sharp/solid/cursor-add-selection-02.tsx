import React from "react";
const CursorAddSelection_02: React.FC<
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
        d="m2.25 2.25 17.5 6.806-7.778 2.916-2.916 7.778z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.25 12.75v3.5h3.5v2h-3.5v3.5h-2v-3.5h-3.5v-2h3.5v-3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CursorAddSelection_02;
