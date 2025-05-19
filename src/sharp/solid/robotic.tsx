import React from "react";
const Robotic: React.FC<
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
        d="M9.75 3.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.25 8V5h1.5v3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 7.25a.75.75 0 0 0-.75.75v14c0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75V8a.75.75 0 0 0-.75-.75zM8.25 12v2h1.5v-2zm6 2v-2h1.5v2zm-4.749 3c-.576.48-.575.481-.575.481.192.219.56.51.815.663.513.308 1.27.607 2.26.607s1.748-.299 2.261-.607c.256-.153.45-.308.585-.43.067-.06.17-.158.23-.233l-.575-.48c-.577-.48-.576-.482-.576-.482a2.5 2.5 0 0 1-.435.339c-.32.191-.813.393-1.49.393-.676 0-1.169-.202-1.489-.393a3.4 3.4 0 0 1-.435-.338z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3 11.25H2a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h1zM21 18.75h1a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-.75-.75h-1z"
      />
    </svg>
  );
};
export default Robotic;
