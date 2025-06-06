import React from "react";
const PrisonGuard: React.FC<
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
        d="m17 7.999 1.09-2.544a1 1 0 0 0-.56-1.328l-5.17-1.989a1 1 0 0 0-.719 0L6.47 4.128a1 1 0 0 0-.56 1.327L7 7.999M17 8v1.999c0 2.76-3 4.999-5 4.999s-5-2.238-5-5V8M9.025 14 8 16.998m0 0 3.4 2.549a1 1 0 0 0 1.2 0l3.4-2.55m-8 0-3.154 1.051A4.16 4.16 0 0 0 2 21.997M14.975 14 16 16.998m0 0 3.154 1.05A4.16 4.16 0 0 1 22 21.997"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18 8c-1.671-.628-3.749-1-6-1s-4.329.372-6 1"
      />
    </svg>
  );
};
export default PrisonGuard;
