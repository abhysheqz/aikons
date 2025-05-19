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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M20.796 12A8.795 8.795 0 0 1 12 20.795c3.117-1.694 5-4.999 5-8.795s-1.883-7.102-5-8.796A8.796 8.796 0 0 1 20.796 12"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoonEclipse;
