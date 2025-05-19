import React from "react";
const CloudSavingDone_02: React.FC<
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
        d="M12 11.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5m-.64 8.317 3.353-4.093-1.16-.95-2.385 2.91-1.182-1.005-.972 1.143z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.853 6.365a5.752 5.752 0 0 0-1.097 10.93 7.25 7.25 0 1 1 14.48.16 5.252 5.252 0 0 0-.99-10.152 6.25 6.25 0 0 0-12.393-.938"
      />
    </svg>
  );
};
export default CloudSavingDone_02;
