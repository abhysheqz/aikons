import React from "react";
const CursorDisabled_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2.6 2.03 15.118 5.815a.44.44 0 0 1-.02.83L11.14 10.86a.44.44 0 0 0-.28.278L8.675 17.7a.44.44 0 0 1-.83.018L2.03 2.6a.44.44 0 0 1 .57-.57ZM14.318 20.682a4.5 4.5 0 0 0 6.364-6.364m-6.364 6.364a4.5 4.5 0 1 1 6.364-6.364m-6.364 6.364 6.364-6.364"
      />
    </svg>
  );
};
export default CursorDisabled_02;
