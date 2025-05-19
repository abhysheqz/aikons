import React from "react";
const CloudLittleSnow: React.FC<
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
        d="M5.853 7.365a5.752 5.752 0 0 0-1.282 10.849l5.747-5.94h3.365l5.858 6.065a5.251 5.251 0 0 0-1.294-10.036 6.25 6.25 0 0 0-12.394-.938"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m12 13.938.617-.61 1.407 1.422-.602.595.602.595-1.407 1.422-.617-.61-.616.61-1.407-1.421.601-.596-.601-.595 1.407-1.422zm-5.602 5.795-.601-.595 1.407-1.422.616.61.617-.61 1.407 1.422-.602.595.602.595-1.407 1.422-.617-.61-.616.61-1.407-1.422zm8.36 0-.601-.595 1.407-1.422.616.61.617-.61 1.407 1.422-.602.595.602.595-1.407 1.422-.617-.61-.616.61-1.407-1.422z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CloudLittleSnow;
