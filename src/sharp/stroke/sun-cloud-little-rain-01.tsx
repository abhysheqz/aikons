import React from "react";
const SunCloudLittleRain_01: React.FC<
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
        d="M17.478 9.045h.022c2.485 0 4.5 2.03 4.5 4.534 0 1.78-1.018 3.18-2.5 3.921m-2.022-8.455a6 6 0 0 0 .022-.504C17.5 5.481 15.038 3 12 3 9.123 3 6.762 5.225 6.52 8.06m10.958.985a5.54 5.54 0 0 1-1.235 3.022M6.52 8.06C3.984 8.303 2 10.456 2 13.075c0 1.91 1.054 3.57 2.609 4.425M6.52 8.06q.237-.023.48-.023c1.126 0 2.165.375 3 1.008"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 3.655A3.84 3.84 0 0 0 5.844 2 3.85 3.85 0 0 0 2 5.857C2 7.154 2.638 8.3 3.616 9M12.001 14.5V16M9 17.5V19m6-1.5V19m-8.5 1.5V22m11-1.5V22M12 20.5V22"
      />
    </svg>
  );
};
export default SunCloudLittleRain_01;
