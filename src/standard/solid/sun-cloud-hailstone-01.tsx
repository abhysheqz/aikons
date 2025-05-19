import React from "react";
const SunCloudHailstone_01: React.FC<
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
        d="M5.969 3.813a2.85 2.85 0 0 0-2.844 2.856c0 .961.471 1.811 1.197 2.33a1 1 0 1 1-1.163 1.627 4.86 4.86 0 0 1-2.034-3.957 4.85 4.85 0 0 1 4.844-4.856c1.65 0 3.105.827 3.977 2.084a1 1 0 1 1-1.642 1.14 2.84 2.84 0 0 0-2.335-1.224"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.125 14.188a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10.125 17.188a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16.125 17.188a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7.125 20.188a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13.125 21.188a1 1 0 1 1-2 0 1 1 0 0 1 2 0M19.125 20.188a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
      <path
        fill="currentColor"
        d="M1.375 14.188a5.75 5.75 0 0 1 4.603-5.636 6.252 6.252 0 0 1 12.394.938 5.251 5.251 0 0 1 2.026 9.656 2.5 2.5 0 0 0-2.837-1.395q.064-.271.064-.564a2.5 2.5 0 0 0-3.064-2.436q.063-.272.064-.563a2.5 2.5 0 1 0-4.936.563 2.5 2.5 0 0 0-3 3 2.506 2.506 0 0 0-2.75 1.224 5.75 5.75 0 0 1-2.564-4.787"
      />
    </svg>
  );
};
export default SunCloudHailstone_01;
