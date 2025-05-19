import React from "react";
const EraserAdd: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 8v8m4-4H7M2 6a2 2 0 0 1 2-2h11.892a2 2 0 0 1 1.695.94l3.75 6a2 2 0 0 1 0 2.12l-3.75 6a2 2 0 0 1-1.695.94H4a2 2 0 0 1-2-2z"
      />
    </svg>
  );
};
export default EraserAdd;
