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
        fill="currentColor"
        d="M9.47 9.47a.75.75 0 0 1 .53-.22l4 .003a.75.75 0 0 1 .75.75v3.998a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-4c0-.2.08-.39.22-.531M16.25 1.25l5.5.004V6.75h-5.5zM2.25 17.25l5.5.004v5.496h-5.5zM22.75 12a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0M5.75 12a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.801 6.754C13.192 7.798 13 9.104 13 10.001h-2c0-1.104.224-2.798 1.074-4.254C12.96 4.227 14.52 3 17 3v2c-1.686 0-2.627.774-3.199 1.754M10 13.001H5v-2h5zm9 0h-5v-2h5zm-8.801 4.246c.609-1.044.801-2.35.801-3.246h2c0 1.103-.224 2.797-1.074 4.253C11.04 19.774 9.481 21 7 21v-2c1.686 0 2.627-.773 3.199-1.753"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AnchorPoint;
