import React from "react";
const MoonEclipse: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m19.545 0a8.795 8.795 0 0 0-8.796-8.795C15.08 4.909 17.237 8.23 17.237 12c0 3.799-2.119 7.103-5.239 8.796A8.797 8.797 0 0 0 20.795 12"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoonEclipse;
