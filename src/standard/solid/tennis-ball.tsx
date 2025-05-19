import React from "react";
const TennisBall: React.FC<
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
        d="M3.444 5.491A10.7 10.7 0 0 0 1.25 12c0 2.447.817 4.702 2.194 6.509 3.949-3.425 3.93-9.607 0-13.018"
      />
      <path
        fill="currentColor"
        d="M4.433 4.364c4.61 4.004 4.632 11.25 0 15.272A10.72 10.72 0 0 0 12 22.75c2.95 0 5.623-1.189 7.566-3.113-4.633-4.022-4.61-11.27 0-15.274A10.72 10.72 0 0 0 12 1.25c-2.95 0-5.624 1.189-7.567 3.114"
      />
      <path
        fill="currentColor"
        d="M20.556 5.49c-3.933 3.411-3.95 9.595 0 13.02A10.7 10.7 0 0 0 22.75 12c0-2.447-.817-4.703-2.194-6.51"
      />
    </svg>
  );
};
export default TennisBall;
