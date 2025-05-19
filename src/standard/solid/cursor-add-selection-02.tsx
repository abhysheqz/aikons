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
        d="M2.33 3.87c-.37-.964.576-1.91 1.54-1.54l15.117 5.815c1.042.4 1.009 1.887-.051 2.24l-6.413 2.138-2.137 6.413c-.353 1.06-1.84 1.093-2.241.05z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.25 12.75a1 1 0 0 1 1 1v2.5h2.5a1 1 0 1 1 0 2h-2.5v2.5a1 1 0 1 1-2 0v-2.5h-2.5a1 1 0 0 1 0-2h2.5v-2.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CursorAddSelection_02;
