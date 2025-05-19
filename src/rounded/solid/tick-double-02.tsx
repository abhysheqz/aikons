import React from "react";
const TickDouble_02: React.FC<
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
        d="M17.19 5.777a1 1 0 0 1 .033 1.413l-6.063 6.352a1 1 0 1 1-1.446-1.38l6.063-6.352a1 1 0 0 1 1.414-.033M1.81 13.11a1 1 0 0 1 1.413.033l2.81 2.943a1 1 0 0 1 1.202 1.568l-.512.537a1 1 0 0 1-1.446 0l-3.5-3.667a1 1 0 0 1 .033-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.19 5.777a1 1 0 0 1 .033 1.413l-10.5 11a1 1 0 0 1-1.446 0l-3.5-3.666a1 1 0 1 1 1.446-1.381L11 16.052 20.777 5.81a1 1 0 0 1 1.413-.033"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TickDouble_02;
