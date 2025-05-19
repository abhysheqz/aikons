import React from "react";
const ThreeDView: React.FC<
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
        d="M11.553 5.606a1 1 0 0 1 .894 0l5 2.5A1 1 0 0 1 18 9v6a1 1 0 0 1-.553.894l-5 2.5a1 1 0 0 1-.894 0l-5-2.5A1 1 0 0 1 6 15V9a1 1 0 0 1 .553-.894zM8 10.618l3 1.5v3.764l-3-1.5zm5 5.264 3-1.5v-3.764l-3 1.5zM4.5 3.5a1 1 0 0 0-1 1v4a1 1 0 0 1-2 0v-4a3 3 0 0 1 3-3h4a1 1 0 0 1 0 2zm10-1a1 1 0 0 1 1-1h4a3 3 0 0 1 3 3v4a1 1 0 1 1-2 0v-4a1 1 0 0 0-1-1h-4a1 1 0 0 1-1-1m-12 12a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h4a1 1 0 1 1 0 2h-4a3 3 0 0 1-3-3v-4a1 1 0 0 1 1-1m19 0a1 1 0 0 1 1 1v4a3 3 0 0 1-3 3h-4a1 1 0 1 1 0-2h4a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ThreeDView;
