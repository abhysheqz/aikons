import React from "react";
const Ambulance: React.FC<
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
        d="M13.5 3.75H2a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h1.283a3.75 3.75 0 1 1 7.434 0h2.566a3.75 3.75 0 1 1 7.434 0H22a.75.75 0 0 0 .75-.75v-3.25H21v-1.5h1.75V12a.75.75 0 0 0-.158-.46l-3.5-4.5a.75.75 0 0 0-.592-.29h-2.75v4.75h-1.5v-7a.75.75 0 0 0-.75-.75M7 6.5V8H5.5v2H7v1.5h2V10h1.5V8H9V6.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7 20.25a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M17 20.25a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
      />
    </svg>
  );
};
export default Ambulance;
