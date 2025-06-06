import React from "react";
const AiInnovation_02: React.FC<
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
        d="M5.143 14A7.8 7.8 0 0 1 4 9.919C4 5.545 7.582 2 12 2s8 3.545 8 7.919A7.8 7.8 0 0 1 18.857 14M17 16H7l.544 1.633A2 2 0 0 0 9.442 19h5.117a2 2 0 0 0 1.897-1.367z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15 19-.544 1.633A2 2 0 0 1 12.559 22h-1.117a2 2 0 0 1-1.898-1.367L9 19"
      />
      <path
        fill="currentColor"
        d="M16.25 7a.75.75 0 0 0-1.5 0zm-1.5 5a.75.75 0 0 0 1.5 0zm-4.306-5v-.75a.75.75 0 0 0-.699.478zm.487 0 .699-.272a.75.75 0 0 0-.7-.478zM7.8 11.728a.75.75 0 1 0 1.398.544zm4.375.544a.75.75 0 1 0 1.398-.544zM14.75 7v5h1.5V7zm-4.306.75h.487v-1.5h-.487zM9.2 12.272l.778-2-1.398-.544-.778 2zm.778-2 1.166-3-1.398-.544-1.166 3zm.255-3 1.166 3 1.398-.544-1.166-3zm1.166 3 .778 2 1.398-.544-.778-2zm-2.12.478h2.82v-1.5h-2.82z"
      />
    </svg>
  );
};
export default AiInnovation_02;
