import React from "react";
const HoldLocked_02: React.FC<
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
        strokeWidth={1.5}
        d="M20 12V7.5c0-.828-.692-1.5-1.545-1.5-.854 0-1.546.672-1.546 1.5m-6.181-2c0-.828-.692-1.5-1.545-1.5-.854 0-1.546.672-1.546 1.5v7.963l-1.67-1.626a1.77 1.77 0 0 0-2.586.14 1.66 1.66 0 0 0-.033 2.072L8.5 21H13M10.728 5.5v-2c0-.828.692-1.5 1.545-1.5.854 0 1.546.672 1.546 1.5v2m-3.091 0V10m3.09-4.5c0-.828.693-1.5 1.546-1.5s1.545.672 1.545 1.5v2m-3.09-2V10m3.09-2.5V10M15 17h6v5h-6zM16.5 17v-1.5a1.5 1.5 0 0 1 3 0V17"
      />
    </svg>
  );
};
export default HoldLocked_02;
