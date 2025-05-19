import React from "react";
const BitcoinDown_02: React.FC<
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
        d="M11 9a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M20 8.5l-4.588-4.206c-.668-.612-1.002-.918-1.404-.91-.401.01-.721.33-1.362.97l-.966.966c-.564.564-.846.846-1.207.879-.361.032-.69-.195-1.345-.65L4 2m16 6.5h-3.5m3.5 0v-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.437 18.167v-5.334m1.563 0V11.5m0 8v-1.334M9.437 15.5h3.125m0 0c.518 0 .938.448.938 1v.666c0 .553-.42 1-.938 1H8.5m4.062-2.666c.518 0 .938-.448.938-1v-.667c0-.552-.42-1-.938-1H8.5"
      />
    </svg>
  );
};
export default BitcoinDown_02;
