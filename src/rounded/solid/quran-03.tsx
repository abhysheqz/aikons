import React from "react";
const Quran_03: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.25 19.5a3.5 3.5 0 0 1 3.5-3.5 1 1 0 1 1 0 2 1.5 1.5 0 0 0 0 3 1 1 0 1 1 0 2 3.5 3.5 0 0 1-3.5-3.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 19.5a3.5 3.5 0 0 1 3.5-3.5h14a1 1 0 1 1 0 2h-14a1.5 1.5 0 0 0 0 3h14a1 1 0 1 1 0 2h-14a3.5 3.5 0 0 1-3.5-3.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 19.5v-14A4.25 4.25 0 0 1 7.5 1.25h10a4.25 4.25 0 0 1 4.25 4.25V17a.75.75 0 0 1-.75.75H6.5a1.75 1.75 0 0 0-1.75 1.75.75.75 0 0 1-1.5 0m8.265-12.077a1 1 0 1 0-1.032-1.713 4.23 4.23 0 1 0 5.807 5.807 1 1 0 1 0-1.713-1.032 2.23 2.23 0 1 1-3.062-3.062M14 7.001a1 1 0 0 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Quran_03;
