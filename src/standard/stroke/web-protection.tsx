import React from "react";
const WebProtection: React.FC<
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
        strokeWidth={1.5}
        d="M16 17.073v-2.218a.716.716 0 0 0-.598-.697c-1.36-.24-2.489-.772-3.04-1.067a.77.77 0 0 0-.724 0c-.551.295-1.68.828-3.04 1.067a.716.716 0 0 0-.598.697v2.218c0 2.893 2.906 4.47 3.764 4.874.151.07.32.07.472 0 .858-.403 3.764-1.981 3.764-4.874Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8h18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.5 5h.009m3.982 0h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 20.5h-.5a2 2 0 0 1-2-2V4.01a2 2 0 0 1 1.999-2l15-.009a2 2 0 0 1 2.001 2V18.5a2 2 0 0 1-2 2H19"
      />
    </svg>
  );
};
export default WebProtection;
