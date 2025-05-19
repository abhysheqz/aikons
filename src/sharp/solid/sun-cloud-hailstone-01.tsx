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
        d="M13 14.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10 17.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 21.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0M15 18.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7 20.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0M19 20.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.683 9.202A4.6 4.6 0 0 1 1.25 5.858 4.6 4.6 0 0 1 5.846 1.25c1.393 0 2.64.622 3.48 1.599a6.25 6.25 0 0 1 8.92 5.454 5.251 5.251 0 0 1 .85 10.2 2.5 2.5 0 0 0-1.66-.19q.064-.272.064-.563a2.5 2.5 0 0 0-3.064-2.436q.063-.272.064-.564a2.5 2.5 0 1 0-4.936.564 2.5 2.5 0 0 0-3 3 2.5 2.5 0 0 0-1.48.11 5.752 5.752 0 0 1-2.4-9.222m.465-3.344c0-1.5 1.21-2.71 2.698-2.71.737 0 1.405.296 1.894.78a6.24 6.24 0 0 0-1.887 3.437c-.597.12-1.16.334-1.675.624a2.71 2.71 0 0 1-1.03-2.13"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SunCloudHailstone_01;
