import React from "react";
const SunCloudHailstone_02: React.FC<
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
        d="M17.478 11h.022a4.5 4.5 0 0 1 4.5 4.5c0 1.21-.223 2.184-1 3M17.478 11q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477M17.478 11a5.48 5.48 0 0 1-1.235 3M6.52 10.023A5 5 0 0 0 2 15c0 1.399.574 2.564 1.5 3.5m3.02-8.477Q6.757 10 7 10c1.126 0 2.165.372 3 1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.455 3.5V2m0 1.5c-2.192 0-3.97 1.79-3.97 4m3.97-4A3.95 3.95 0 0 1 10.5 4.933M2 7.5h1.485m0 0c0 1.195.52 2.267 1.344 3m-1.344-7 1.163 1.172"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m11.998 15 .004.008m2.995 2.989.004.007M9 17.997l.004.007m8.993 2.99L18 21m-12-.008.004.008m5.994.991.004.008"
      />
    </svg>
  );
};
export default SunCloudHailstone_02;
