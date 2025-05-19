import React from "react";
const Drink: React.FC<
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
        d="M1.613 5.538A1 1 0 0 1 2.5 5h14a1 1 0 0 1 .82 1.573l-7 10a1 1 0 0 1-1.64 0l-7-10a1 1 0 0 1-.067-1.035"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.572 1.629a1 1 0 0 1 1.3-.557l2.5 1a1 1 0 0 1 .615.764l.5 3a1 1 0 1 1-1.973.329L7.106 3.72 5.13 2.929a1 1 0 0 1-.557-1.3M9.5 15a1 1 0 0 1 1 1v5h.5a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h.5v-5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.732 10.027c.397.113.816.174 1.249.174 2.49 0 4.518-2.01 4.518-4.5s-2.028-4.5-4.518-4.5a4.52 4.52 0 0 0-3.942 2.3h2.46a2.5 2.5 0 0 1 2.048 3.934z"
      />
    </svg>
  );
};
export default Drink;
