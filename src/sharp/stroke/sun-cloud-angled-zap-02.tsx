import React from "react";
const SunCloudAngledZap_02: React.FC<
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
        d="m13.08 15-2.078 3.5h3L11.924 22"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.98 11h.022a4.5 4.5 0 0 1 4.5 4.5c0 2.325-1.738 4.263-4 4.5m-.522-9a5.5 5.5 0 1 0-10.957-.977M17.98 11a5.47 5.47 0 0 1-1.235 3m-9.723-3.977A5 5 0 0 0 2.502 15c0 2.419 1.718 4.512 4 4.975m.52-9.952Q7.26 10 7.502 10c1.126 0 2.165.372 3 1"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.455 4V2m0 2c-2.192 0-3.97 1.79-3.97 4m3.97-4A3.95 3.95 0 0 1 10.5 5.433M1.5 8h1.985m0 0c0 1.195.52 2.267 1.344 3M3.245 3.758l1.403 1.414"
      />
    </svg>
  );
};
export default SunCloudAngledZap_02;
