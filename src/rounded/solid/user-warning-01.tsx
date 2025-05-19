import React from "react";
const UserWarning_01: React.FC<
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
        d="M7.087 13.883A11.06 11.06 0 0 1 12 12.75c2.182 0 3.824.602 4.913 1.132l.023.012c.16.088.567.312.784.444a12 12 0 0 1 1.586 1.144c.52.454 1.069 1.047 1.313 1.73.127.358.179.76.077 1.177-.101.419-.34.787-.685 1.101-1.07.977-2.357 1.76-4.018 1.76H8.007c-1.661 0-2.947-.783-4.018-1.759-.345-.314-.584-.683-.685-1.101s-.05-.82.077-1.177c.244-.683.793-1.276 1.313-1.73.537-.47 1.134-.868 1.586-1.144.228-.14.667-.38.807-.457M7.75 7a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m0 7a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserWarning_01;
