import React from "react";
const WebValidation: React.FC<
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
        d="M21 10V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2V18a2 2 0 0 0 2 2L9.126 20"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.001 8h19"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.992 5h.009M9.992 5h.01"
      />
      <path
        fill="currentColor"
        d="M15.53 16.47a.75.75 0 1 0-1.06 1.06zm.97 2.03-.53.53a.75.75 0 0 0 1.106-.05zm3.076-2.52a.75.75 0 0 0-1.152-.96zM22.75 17A5.75 5.75 0 0 0 17 11.25v1.5A4.25 4.25 0 0 1 21.25 17zM17 11.25A5.75 5.75 0 0 0 11.25 17h1.5A4.25 4.25 0 0 1 17 12.75zM11.25 17A5.75 5.75 0 0 0 17 22.75v-1.5A4.25 4.25 0 0 1 12.75 17zM17 22.75A5.75 5.75 0 0 0 22.75 17h-1.5A4.25 4.25 0 0 1 17 21.25zm-2.53-5.22 1.5 1.5 1.06-1.06-1.5-1.5zm2.606 1.45 2.5-3-1.152-.96-2.5 3z"
      />
    </svg>
  );
};
export default WebValidation;
