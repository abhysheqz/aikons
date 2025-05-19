import React from "react";
const Pulley: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 3h18"
      />
      <circle
        cx={15.5}
        cy={10.5}
        r={3.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={8.5}
        cy={17.5}
        r={3.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 17.5V3M12 17.5v-7M15.5 7V3M19 17v-6.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 17c-.714 0-1.097.2-1.383.896-.373.908-.826 2.254-.511 2.807.168.297.554.297 1.325.297h1.137c.772 0 1.158 0 1.326-.297.315-.553-.138-1.9-.51-2.807C20.11 17.232 19.741 17 19 17Z"
      />
    </svg>
  );
};
export default Pulley;
