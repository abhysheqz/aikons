import React from "react";
const Scooter_01: React.FC<
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
        d="M9 9H5V7h4zM5 16a2 2 0 1 0 4 0h2a4 4 0 0 1-8 0zM20 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M1 16a6 6 0 0 1 12 0v1H1z" />
      <path
        fill="currentColor"
        d="M18.478 7c-.45-.447-1.408-1-3.478-1V4c2.707 0 4.277.82 5.143 1.86.42.503.634 1.012.742 1.404.055.195.115.369.115.736a1 1 0 0 1-1 1h-2.277l1.145 2.004a1 1 0 0 1-.079 1.11l-3.5 4.5A1 1 0 0 1 14.5 17H12v-2h2.01l2.79-3.585-1.668-2.919A1 1 0 0 1 16 7z"
      />
    </svg>
  );
};
export default Scooter_01;
