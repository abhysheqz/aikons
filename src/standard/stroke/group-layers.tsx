import React from "react";
const GroupLayers: React.FC<
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
        d="M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM20 6v12m-2 2H6M18 4H6M4 6v12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8 13.31 3.47 2.047a1.05 1.05 0 0 0 1.06 0L16 13.309m-7.322-3.018 2.792-1.648a1.05 1.05 0 0 1 1.06 0l2.792 1.648a.458.458 0 0 1 0 .8l-2.792 1.647a1.05 1.05 0 0 1-1.06 0l-2.792-1.647a.458.458 0 0 1 0-.8"
      />
    </svg>
  );
};
export default GroupLayers;
