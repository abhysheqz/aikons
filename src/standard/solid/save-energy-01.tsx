import React from "react";
const SaveEnergy_01: React.FC<
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
        d="M15 1.318a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5m.6 4.2a.75.75 0 1 0-1.2-.9l-1.5 2a.75.75 0 0 0 .6 1.2H15l-.6.8a.75.75 0 1 0 1.2.9l1.5-2a.75.75 0 0 0-.6-1.2H15z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4 13.318a.75.75 0 0 0-.75.75v6.02c0 .335.223.63.546.721l6.254 1.77a2.75 2.75 0 0 0 1.978-.187l7.585-3.793a1.627 1.627 0 0 0 .783-2.059 2.75 2.75 0 0 0-3.423-1.587l-2.217.739c.318.63.51 1.311.51 1.875a.75.75 0 0 1-.558.725l-3.74.992a1.75 1.75 0 0 1-.959-.017l-3.227-.983a.75.75 0 0 1 .436-1.435l3.228.983a.25.25 0 0 0 .137.003l3.09-.82a3.9 3.9 0 0 0-.379-.873l-.001-.003c-.555-.83-1.57-1.446-2.793-1.446h-.807l-1.881-1.035a2.75 2.75 0 0 0-1.326-.34z"
      />
    </svg>
  );
};
export default SaveEnergy_01;
