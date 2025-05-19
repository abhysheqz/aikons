import React from "react";
const CheckmarkSquare_04: React.FC<
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
        d="m20.956 2.25-8.987 9.804-2.762-2.761-1.414 1.414 4.238 4.239L21.75 4.344V21a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V3A.75.75 0 0 1 3 2.25z"
      />
    </svg>
  );
};
export default CheckmarkSquare_04;
