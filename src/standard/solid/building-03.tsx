import React from "react";
const Building_03: React.FC<
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
        d="M15.072 9.629a1 1 0 0 1 1.3-.557l3.742 1.497A3 3 0 0 1 22 13.354V22a1 1 0 1 1-2 0v-8.646a1 1 0 0 0-.628-.928l-3.743-1.497a1 1 0 0 1-.557-1.3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 3a1.75 1.75 0 0 1 2.185-1.694l10.989 2.82a1.75 1.75 0 0 1 1.315 1.695v16.93H2.25zm5 6A.75.75 0 0 1 8 8.25h3a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9m0 4a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m1.25 3.25A1.75 1.75 0 0 0 6.75 18v4a.75.75 0 0 0 1.5 0v-4a.25.25 0 0 1 .25-.25h2a.25.25 0 0 1 .25.25v4a.75.75 0 0 0 1.5 0v-4a1.75 1.75 0 0 0-1.75-1.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 22a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Building_03;
