import React from "react";
const AirplaneLanding_02: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.05 20.093H2.242"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m20.804 4.095-3.053.098a.01.01 0 0 0-.01.009L17.45 7.63 8.46 8.745c-3.257.7-4.701 3.481-5.067 5.587-.124 1.007-.036 1.192.11 1.413.226.344.602.649 1.44.385l6.284-1.784 2.262 1.75.008.001 4.804-1.163a.01.01 0 0 0 .004-.017l-2.615-2.194 6.549-2.341a.01.01 0 0 0 .006-.012l-1.431-6.267a.01.01 0 0 0-.01-.008Z"
      />
    </svg>
  );
};
export default AirplaneLanding_02;
