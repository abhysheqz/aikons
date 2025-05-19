import React from "react";
const Plate: React.FC<
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
        d="M9.002 2.25a7.75 7.75 0 1 0 0 15.5 7.75 7.75 0 0 0 0-15.5M5.752 10a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0m3.25-4.75a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.998 21.75a7.75 7.75 0 0 0 2.654-15.034 9.2 9.2 0 0 1 .585 3.81 4.75 4.75 0 0 1-5.202 7.801 9.2 9.2 0 0 1-3.742.919 7.73 7.73 0 0 0 5.705 2.504"
      />
      <path
        fill="currentColor"
        d="M18.248 14a3.25 3.25 0 0 1-3.49 3.241 9.26 9.26 0 0 0 3.142-4.705c.223.44.348.937.348 1.464"
      />
    </svg>
  );
};
export default Plate;
