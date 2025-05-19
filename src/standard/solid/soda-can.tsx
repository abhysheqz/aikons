import React from "react";
const SodaCan: React.FC<
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
        d="M4.5 2a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2h-13a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.432 1.72A2 2 0 0 1 7.968 1h8.064a2 2 0 0 1 1.536.72l1.968 2.362A2 2 0 0 1 20 5.362v13.276a2 2 0 0 1-.464 1.28l-1.968 2.362a2 2 0 0 1-1.536.72H7.968a2 2 0 0 1-1.536-.72l-1.968-2.362A2 2 0 0 1 4 18.638V5.362a2 2 0 0 1 .464-1.28zm9.6 1.28H7.968L6 5.362v13.276L7.968 21h8.064L18 18.638V5.362z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 4.25a.75.75 0 0 0-.75.75v14c0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75V5a.75.75 0 0 0-.75-.75zm7 4.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SodaCan;
