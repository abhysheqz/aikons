import React from "react";
const Progress_04: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m.997 3.316C12.45 4.493 12 4.948 12 5.5V11a1 1 0 0 1-1 1H5.5c-.552 0-1.007.45-.934.997a7.5 7.5 0 1 0 8.43-8.43"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Progress_04;
