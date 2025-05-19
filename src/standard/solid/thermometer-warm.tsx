import React from "react";
const ThermometerWarm: React.FC<
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
        d="M11.5 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1M5.135 5.636a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414M2.5 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1m3.344 4.243a1 1 0 1 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414-1.414zM11.5 18a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.5 7.25a4.75 4.75 0 1 0 .68 9.452c.238-.916.703-1.827 1.33-2.487.228-.24.381-.402.489-.523V7.96a4.73 4.73 0 0 0-2.499-.71"
      />
      <path
        fill="currentColor"
        d="M17.5 22a4 4 0 0 0 2-7.465V4a2 2 0 1 0-4 0v10.535a4 4 0 0 0 2 7.465"
      />
    </svg>
  );
};
export default ThermometerWarm;
