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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.978 11H18a4.5 4.5 0 0 1 4.5 4.5c0 2.325-1.738 4.263-4 4.5m-.522-9q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477M17.978 11a5.48 5.48 0 0 1-1.235 3M7.02 10.023A5 5 0 0 0 2.5 15c0 2.419 1.718 4.512 4 4.975m.52-9.952Q7.257 10 7.5 10c1.126 0 2.165.372 3 1"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.455 4V2m0 2c-2.192 0-3.97 1.79-3.97 4m3.97-4A3.95 3.95 0 0 1 10.5 5.433M1.5 8h1.985m0 0c0 1.195.52 2.267 1.344 3M3.245 3.758l1.403 1.414"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.5 16S10 17.5 10 19.503c0 1.231.947 2.497 2.5 2.497s2.5-1.266 2.5-2.497C15 17.5 12.5 16 12.5 16Z"
      />
    </svg>
  );
};
export default SunCloudBigRain_02;
