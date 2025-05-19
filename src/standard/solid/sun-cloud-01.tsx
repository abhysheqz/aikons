import React from "react";
const SunCloud_01: React.FC<
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
        d="M5.844 5A2.85 2.85 0 0 0 3 7.857c0 .96.471 1.81 1.197 2.33a1 1 0 0 1-1.163 1.627A4.86 4.86 0 0 1 1 7.857 4.85 4.85 0 0 1 5.844 3c1.65 0 3.105.827 3.977 2.084A1 1 0 1 1 8.18 6.225 2.84 2.84 0 0 0 5.844 5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.853 9.365A5.752 5.752 0 0 0 7 20.75h10.5a5.25 5.25 0 0 0 .747-10.447 6.25 6.25 0 0 0-12.394-.938"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SunCloud_01;
