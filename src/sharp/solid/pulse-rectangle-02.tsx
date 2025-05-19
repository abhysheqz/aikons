import React from "react";
const PulseRectangle_02: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm12.558 5h-1.673l-1 5H11.46l-.606 1.819L9.606 8.25H7.914l-1 4H5v1.5h3.086l.627-2.51 1.18 5.51h1.648l1-3h1.574l.73-3.654 1.097 3.654H19v-1.5h-1.942z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PulseRectangle_02;
