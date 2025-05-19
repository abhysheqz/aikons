import React from "react";
const AnchorPoint: React.FC<
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
        d="M10 14v-4l4 .003V14z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17 6V2l4 .003V6zM3 22v-4l4 .003V22z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM2 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 12h5M14 12h5M12 10c0-2 .833-6 5-6M12 14c0 2-.833 6-5 6"
      />
    </svg>
  );
};
export default AnchorPoint;
