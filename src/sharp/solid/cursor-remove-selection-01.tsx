import React from "react";
const CursorRemoveSelection_01: React.FC<
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
        d="M11 6.5h8v2h-8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m5.625 1.25-1.375 19 5.187-3.398 2.79 5.898 3.975-1.957-2.65-5.67 6.198-1.33L15.48 10H9.5V4.69z"
      />
    </svg>
  );
};
export default CursorRemoveSelection_01;
