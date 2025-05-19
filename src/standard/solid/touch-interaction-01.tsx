import React from "react";
const TouchInteraction_01: React.FC<
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
        d="M6 3a1 1 0 0 0-1 1v1.997a1 1 0 0 0 .997 1L7.003 7a1 1 0 0 1-.006 2l-1.005-.003a3 3 0 0 1-2.992-3V4a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v1.992a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.251 6.501a2.251 2.251 0 0 1 4.502 0v4.27c2.982.178 4.728 1.396 5.636 2.34.69.72.869 1.673.869 2.484a5.4 5.4 0 0 1-.906 2.99l-1.096 1.642V22a.75.75 0 0 1-.75.75h-7.505a.75.75 0 0 1-.75-.75v-1.71l-3.875-4.26a2.377 2.377 0 0 1 3.438-3.277l.437.437z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TouchInteraction_01;
