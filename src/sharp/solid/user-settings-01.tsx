import React from "react";
const UserSettings_01: React.FC<
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
        d="M18.579 12.75v1.563c.51.152.97.423 1.345.781l1.383-.79.943 1.65-1.383.79a3.3 3.3 0 0 1 0 1.512l1.383.79-.943 1.65-1.383-.79c-.375.358-.834.63-1.345.781v1.563h-1.9v-1.563a3.3 3.3 0 0 1-1.345-.781l-1.384.79-.942-1.65 1.383-.79a3.3 3.3 0 0 1 0-1.512l-1.383-.79.942-1.65 1.384.79c.375-.358.834-.63 1.345-.781V12.75zm-.95 3.325a1.424 1.424 0 1 0 0 2.85 1.424 1.424 0 1 0 0-2.85"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m12.256 20.25-.954-1.669 1.752-1.081-1.752-1.081 2.075-3.631a7.7 7.7 0 0 0-2.122-.838A5.252 5.252 0 0 0 9.5 1.75a5.25 5.25 0 0 0-1.755 10.2A7.75 7.75 0 0 0 1.75 19.5v.75z"
      />
    </svg>
  );
};
export default UserSettings_01;
