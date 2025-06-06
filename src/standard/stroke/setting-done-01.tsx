import React from "react";
const SettingDone_01: React.FC<
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
        d="M10.5 22a.89.89 0 0 1-.853-.64l-.728-2.518-1.478-.829-2.552.632a1 1 0 0 1-1.1-.46L2.425 15.89a1 1 0 0 1 .198-1.261l1.79-1.576v-2.106l-1.79-1.576a1 1 0 0 1-.199-1.261l1.364-2.295a1 1 0 0 1 1.1-.46l2.552.632L9 5l.772-2.316A1 1 0 0 1 10.721 2h2.558a1 1 0 0 1 .949.684L15 5l1.56.987 2.552-.632a1 1 0 0 1 1.1.46l1.39 2.338a1 1 0 0 1-.154 1.22l-.627.624M14.5 9.551a3.5 3.5 0 1 0-4.95 4.95"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 21.998a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15 17 1.5 1.5 2.5-3"
      />
    </svg>
  );
};
export default SettingDone_01;
