import React from "react";
const Radar_02: React.FC<
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
        d="M12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12 17.937 22.75 12 22.75M7 12a5 5 0 1 0 9.93-.835 1 1 0 0 1 1.973-.33Q19 11.405 19 12a7 7 0 1 1-2.05-4.95 1 1 0 0 1 0 1.414l-4.243 4.243a1 1 0 0 1-1.414-1.414l3.465-3.465A5 5 0 0 0 7 12"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Radar_02;
