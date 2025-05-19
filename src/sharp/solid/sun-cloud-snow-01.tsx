import React from "react";
const SunCloudSnow_01: React.FC<
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
        d="M17 15.251a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 15.251a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 19.251a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 17.251a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17 19.251a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 21.251a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.683 9.702A4.6 4.6 0 0 1 1.25 6.358 4.6 4.6 0 0 1 5.846 1.75c1.393 0 2.64.622 3.48 1.599a6.25 6.25 0 0 1 8.92 5.454 5.251 5.251 0 0 1 .252 10.352 2.5 2.5 0 0 0-.998-1.905 2.5 2.5 0 1 0-4-2 2.5 2.5 0 0 0-1.5-.5 2.5 2.5 0 0 0-1.5.5 2.5 2.5 0 1 0-4 2 2.5 2.5 0 0 0-.992 1.804 5.752 5.752 0 0 1-2.825-9.352m.465-3.344c0-1.5 1.21-2.71 2.698-2.71.737 0 1.405.296 1.894.78a6.24 6.24 0 0 0-1.887 3.437c-.597.12-1.16.334-1.675.624a2.71 2.71 0 0 1-1.03-2.13"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SunCloudSnow_01;
