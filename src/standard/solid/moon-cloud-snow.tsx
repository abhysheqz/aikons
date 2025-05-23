import React from "react";
const MoonCloudSnow: React.FC<
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
        d="M6.485 1.24a1 1 0 0 1 .925-.202 5.03 5.03 0 0 1 2.992 2.35c.284.497.476 1.024.58 1.56a1 1 0 0 1-1.964.381 3.1 3.1 0 0 0-1.027-1.763 4.15 4.15 0 0 1-1.898 2.436c-.961.56-2.051.688-3.05.444.06.349.18.694.367 1.019A3.03 3.03 0 0 0 6.01 9a1 1 0 1 1-.02 2 5.03 5.03 0 0 1-4.317-2.543 5.1 5.1 0 0 1-.519-3.779 1 1 0 0 1 1.577-.551c.666.508 1.59.593 2.354.147a2.18 2.18 0 0 0 1.058-2.152 1 1 0 0 1 .342-.882M7.497 15.134a1.01 1.01 0 0 1 1.37.374 1 1 0 1 1-1.73 1 1.01 1.01 0 0 1 .36-1.374m7.996 0a1.01 1.01 0 0 1 1.37.374 1 1 0 1 1-1.731 1 1.01 1.01 0 0 1 .36-1.374m-3.998 1.998a1.01 1.01 0 0 1 1.37.373 1 1 0 1 1-1.731 1 1.01 1.01 0 0 1 .361-1.373m-3.998 1.997a1.01 1.01 0 0 1 1.37.373 1 1 0 1 1-1.73 1.001h-.002a1.01 1.01 0 0 1 .362-1.374m7.996 0a1.01 1.01 0 0 1 1.37.373 1 1 0 1 1-1.731 1.001 1.01 1.01 0 0 1 .36-1.374m-3.998 1.997a1.01 1.01 0 0 1 1.37.374 1 1 0 1 1-1.731 1 1.01 1.01 0 0 1 .361-1.373"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 15a5.75 5.75 0 0 1 4.603-5.635 6.252 6.252 0 0 1 12.394.938 5.251 5.251 0 0 1 .163 10.368 2.49 2.49 0 0 0-.904-2.666 2.5 2.5 0 0 0 .66-3.248 2.51 2.51 0 0 0-3.42-.922 2.5 2.5 0 0 0-1.245 2.167 2.5 2.5 0 0 0-2.995-.01 2.508 2.508 0 0 0-3.756-2.156A2.508 2.508 0 0 0 6.495 18a2.51 2.51 0 0 0-.924 2.57A5.75 5.75 0 0 1 1.25 15"
      />
    </svg>
  );
};
export default MoonCloudSnow;
