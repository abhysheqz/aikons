import React from "react";
const DirectionRight_01: React.FC<
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
        d="M9 2a1 1 0 0 0-1 1v17H6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-7.25h6.5a.75.75 0 0 0 .61-.314l2.5-3.5a.75.75 0 0 0 0-.872l-2.5-3.5a.75.75 0 0 0-.61-.314H10V3a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DirectionRight_01;
