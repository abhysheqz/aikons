import React from "react";
const SunCloudBigRain_02: React.FC<
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
        d="M17.478 11h.022a4.5 4.5 0 0 1 4.5 4.5c0 2.316-1.75 4.251-4 4.5m-.522-9q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477M17.478 11a5.48 5.48 0 0 1-1.235 3M6.52 10.023A5 5 0 0 0 2 15c0 2.419 1.718 4.537 4 5m.52-9.977Q6.757 10 7 10c1.126 0 2.165.372 3 1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.455 3.5V2m0 1.5c-2.192 0-3.97 1.79-3.97 4m3.97-4A3.95 3.95 0 0 1 10.5 4.933M2 7.5h1.485m0 0c0 1.195.52 2.267 1.344 3m-1.344-7 1.163 1.172M12 16c-.74.716-2.5 2.248-2.5 3.503C9.5 20.734 10.447 22 12 22s2.5-1.266 2.5-2.497c0-1.255-1.76-2.787-2.5-3.503"
      />
    </svg>
  );
};
export default SunCloudBigRain_02;
