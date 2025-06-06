import React from "react";
const RssConnected_02: React.FC<
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
        d="M13.5 22H20a2 2 0 0 0 2-2v-6M3 11V8a2 2 0 0 1 2-2h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 21h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 17.235c2.493 0 4.77 2.265 4.77 4.765M10 22c0-4.5-4.005-8-7.955-8"
      />
      <path
        fill="currentColor"
        d="M15.53 6.47a.75.75 0 1 0-1.06 1.06zm.97 2.03-.53.53a.75.75 0 0 0 1.106-.05zm3.076-2.52a.75.75 0 0 0-1.152-.96zM22.75 7A5.75 5.75 0 0 0 17 1.25v1.5A4.25 4.25 0 0 1 21.25 7zM17 1.25A5.75 5.75 0 0 0 11.25 7h1.5A4.25 4.25 0 0 1 17 2.75zM11.25 7A5.75 5.75 0 0 0 17 12.75v-1.5A4.25 4.25 0 0 1 12.75 7zM17 12.75A5.75 5.75 0 0 0 22.75 7h-1.5A4.25 4.25 0 0 1 17 11.25zm-2.53-5.22 1.5 1.5 1.06-1.06-1.5-1.5zm2.606 1.45 2.5-3-1.152-.96-2.5 3z"
      />
    </svg>
  );
};
export default RssConnected_02;
