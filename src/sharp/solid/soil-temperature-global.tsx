import React from "react";
const SoilTemperatureGlobal: React.FC<
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
        d="M14.798 17.1a9 9 0 0 0-1.051 1.8l-1.833-.8a11 11 0 0 1 1.285-2.202z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 9.5c-5.888 0-10.864 3.915-12.462 9.285l-1.917-.57C9.465 12.019 15.203 7.5 22 7.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.998 5.5c-8.09 0-14.861 5.65-16.579 13.221l-1.95-.442C5.389 9.817 12.954 3.5 21.998 3.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19 22.5a3 3 0 0 0 1.5-5.599V12.5h-3v4.401A2.999 2.999 0 0 0 19 22.5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.288 11.793A9 9 0 0 0 2 11.5v-2c.964 0 1.901.124 2.795.358zM6.898 8.454A13 13 0 0 0 2 7.5v-2c1.998 0 3.906.391 5.652 1.102zM10.262 5.639A16.9 16.9 0 0 0 2 3.5v-2c3.35 0 6.5.868 9.235 2.392z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SoilTemperatureGlobal;
