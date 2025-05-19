import React from "react";
const SunCloudLittleRain_02: React.FC<
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
        d="M12.497 14.5V16m-3 1.5V19m6-1.5V19m-8.5 1.5V22m11-1.5V22m-5.5-1.5V22M17.978 11.045H18c2.485 0 4.5 2.03 4.5 4.534 0 1.572-1 2.921-2 3.421m-2.522-7.955a6 6 0 0 0 .022-.504C18 7.481 15.538 5 12.5 5c-2.877 0-5.238 2.225-5.48 5.06m10.958.985a5.54 5.54 0 0 1-1.235 3.022M7.02 10.06c-2.536.243-4.52 2.396-4.52 5.015 0 1.648.786 3.006 2 3.925m2.52-8.94q.237-.023.48-.023c1.126 0 2.165.375 3 1.008"
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
export default SunCloudLittleRain_02;
