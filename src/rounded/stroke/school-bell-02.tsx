import React from "react";
const SchoolBell_02: React.FC<
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
        d="m7.532 10.781-.082.12a4.21 4.21 0 0 1-3.475 1.833H3.88c-.782 0-1.174.946-.621 1.499l6.508 6.508c.553.553 1.5.161 1.5-.621v-.095c0-1.39.685-2.69 1.833-3.476l.119-.081a4.091 4.091 0 1 0-5.687-5.687"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M19 17a4.9 4.9 0 0 1-1.427 2.657A5.2 5.2 0 0 1 15 21M7 5a5.2 5.2 0 0 0-2.596 1.404A5.2 5.2 0 0 0 3 9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13 8.802 3.89-4.926a2.303 2.303 0 1 1 3.234 3.235L15.198 11"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8 19.314A2.343 2.343 0 1 1 4.686 16"
      />
    </svg>
  );
};
export default SchoolBell_02;
