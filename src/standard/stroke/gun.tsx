import React from "react";
const Gun: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 15h.877c.95 0 1.426 0 1.843-.09a4 4 0 0 0 2.746-2.144c.188-.383.303-.844.534-1.766M2 8h2.93a2 2 0 0 0 1.664-.89L8 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.952 7.992h-2.454M10.491 10.98 21.9 11a.1.1 0 0 0 .1-.1V3.662a.1.1 0 0 0-.145-.09L19 4.998h-16a1 1 0 0 0-1 1v4.984c1.427 0 2.19 1.278 1.984 2.193l-1.642 6.063a1 1 0 0 0 .965 1.262h6.493a.1.1 0 0 0 .08-.16l-1.09-1.452a1 1 0 0 1-.166-.856zm0 0H8.5"
      />
    </svg>
  );
};
export default Gun;
