import React from "react";
const SunCloudLittleSnow_02: React.FC<
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
        d="m11.302 15 1.2 1.143m0 0 1.2 1.143m-1.2-1.143 1.2-1.143m-1.2 1.143-1.2 1.143m3.8 2.428 1.2 1.143m0 0 1.2 1.143m-1.2-1.143 1.2-1.143m-1.2 1.143L15.102 22m-7.6-2.286 1.2 1.143m0 0L9.902 22m-1.2-1.143 1.2-1.143m-1.2 1.143L7.502 22M17.98 11.01h.022c2.485 0 4.5 2.017 4.5 4.506 0 1.544-.776 2.742-1.958 3.484m-2.564-7.99q.021-.249.022-.502A5.504 5.504 0 0 0 12.502 5a5.504 5.504 0 0 0-5.48 5.03m10.958.98a5.5 5.5 0 0 1-1.235 3.004M7.022 10.03a5.005 5.005 0 0 0-4.52 4.985c0 1.688.834 3.098 2.112 3.985m2.408-8.97q.237-.022.48-.022c1.126 0 2.165.372 3 1.001"
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
export default SunCloudLittleSnow_02;
