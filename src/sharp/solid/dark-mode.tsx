import React from "react";
const DarkMode: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M20.796 12A8.796 8.796 0 0 1 12 20.797V17a5 5 0 0 0 0-10V3.205a8.795 8.795 0 0 1 8.796 8.796M12 7a5 5 0 1 0 0 10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DarkMode;
