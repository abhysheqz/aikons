import React from "react";
const SunCloudLittleSnow_01: React.FC<
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
        d="M2.683 9.702A4.6 4.6 0 0 1 1.25 6.358 4.6 4.6 0 0 1 5.846 1.75c1.393 0 2.64.622 3.48 1.6a6.25 6.25 0 0 1 8.92 5.454 5.251 5.251 0 0 1 1.295 10.035l-5.858-6.065h-3.365l-5.747 5.94a5.75 5.75 0 0 1-1.888-9.012m.465-3.344c0-1.5 1.21-2.71 2.698-2.71.737 0 1.405.296 1.894.78a6.24 6.24 0 0 0-1.887 3.437c-.597.12-1.16.334-1.675.624a2.71 2.71 0 0 1-1.03-2.13"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m12 14.438.617-.61 1.407 1.422-.602.595.602.595-1.407 1.422-.617-.61-.616.61-1.407-1.421.601-.596-.601-.595 1.407-1.422zm-5.602 5.795-.601-.595 1.407-1.422.616.61.617-.61 1.407 1.422-.602.595.602.595-1.407 1.422-.617-.61-.616.61-1.407-1.422zm8.36 0-.601-.595 1.407-1.422.616.61.617-.61 1.407 1.422-.602.595.602.595-1.407 1.422-.617-.61-.616.61-1.407-1.422z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SunCloudLittleSnow_01;
