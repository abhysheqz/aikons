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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.978 11.045H18c2.485 0 4.5 2.03 4.5 4.533 0 1.343-.5 2.422-1 2.922m-3.522-7.455q.021-.249.022-.504C18 7.481 15.538 5 12.5 5c-2.877 0-5.238 2.225-5.48 5.06m10.958.985a5.54 5.54 0 0 1-1.235 3.022M7.02 10.06c-2.536.243-4.52 2.396-4.52 5.015 0 1.409.574 2.542 1.5 3.425m3.02-8.44q.237-.023.48-.023c1.126 0 2.165.375 3 1.008"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.455 4V2m0 2c-2.192 0-3.97 1.79-3.97 4m3.97-4A3.95 3.95 0 0 1 10.5 5.433M1.5 8h1.985m0 0c0 1.195.52 2.267 1.344 3M3.245 3.758l1.403 1.414"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12.502 15 .004.008m2.995 2.989.004.007m-6.002-.007.004.007m8.992 2.99.005.007m-12-.008.004.008m5.994.991.004.008"
      />
    </svg>
  );
};
export default SunCloudHailstone_02;
