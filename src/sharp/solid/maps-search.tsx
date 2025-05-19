import React from "react";
const MapsSearch: React.FC<
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
        d="M13.25 17.752a4.502 4.502 0 1 1 8.302 2.415l1.198 1.199-1.384 1.384-1.199-1.198a4.502 4.502 0 0 1-6.917-3.8m4.502-2.545a2.545 2.545 0 1 0 0 5.09 2.545 2.545 0 0 0 0-5.09"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m12.02 19.537-3.27-1.404V1.25l5.5 2.36v9.267a6 6 0 0 0-2.5 4.875 6 6 0 0 0 .27 1.785M22.75 14.428v-9.68a.75.75 0 0 0-.75-.75h-6.25v8.094a6 6 0 0 1 2.002-.342 6 6 0 0 1 4.998 2.678M1.658 4.164 7.25 1.297v16.747l-5.013 1.668A.75.75 0 0 1 1.25 19V4.831a.75.75 0 0 1 .408-.667"
      />
    </svg>
  );
};
export default MapsSearch;
