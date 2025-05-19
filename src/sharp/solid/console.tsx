import React from "react";
const Console: React.FC<
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
        d="M11.096 3.2C6.725 3.2 3.2 6.702 3.2 11a7.7 7.7 0 0 0 1.65 4.772l1.324-1.325 1.38 1.379-1.321 1.32a7.92 7.92 0 0 0 4.863 1.654q.623-.001 1.22-.092l.294 1.927q-.742.114-1.514.115c-5.428 0-9.846-4.355-9.846-9.75s4.418-9.75 9.846-9.75c4.73 0 8.689 3.305 9.633 7.724l-1.907.407a7.7 7.7 0 0 0-1.565-3.26l-1.432 1.432-1.378-1.38 1.402-1.402A7.92 7.92 0 0 0 11.096 3.2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.375 11.25a4.125 4.125 0 0 0-2.818 7.137l-.788 3.446a.75.75 0 0 0 .968.879l2.763-.921 2.763.92a.75.75 0 0 0 .968-.878l-.788-3.446a4.125 4.125 0 0 0-2.818-7.137zm-1.846 9.617.375-1.637c.457.174.954.27 1.472.27h.25c.518 0 1.014-.096 1.472-.27l.374 1.637-1.971-.658z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M13 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    </svg>
  );
};
export default Console;
