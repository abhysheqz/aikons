import React from "react";
const UmbrellaDollar: React.FC<
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
        d="M12 1a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 12.5a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1c0-6.116-4.518-10-10-10S2 6.384 2 12.5m2.05-1c.446-4.342 3.8-7 7.95-7s7.504 2.658 7.95 7z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 12.5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1c0-2.854-.46-5.26-1.264-6.992C14.953 3.823 13.694 2.5 12 2.5S9.047 3.823 8.265 5.508C7.46 7.24 7 9.646 7 12.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 11.5a1 1 0 0 1 1 1v8a2.5 2.5 0 0 1-5 0V20a1 1 0 1 1 2 0v.5a.5.5 0 0 0 1 0v-8a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 16c-.828 0-1.5.56-1.5 1.25s.672 1.25 1.5 1.25 1.5.56 1.5 1.25S18.328 21 17.5 21m0-5c.49 0 .926.196 1.2.5m-1.2-.5v-1m0 6c-.49 0-.926-.196-1.2-.5m1.2.5v1"
      />
    </svg>
  );
};
export default UmbrellaDollar;
