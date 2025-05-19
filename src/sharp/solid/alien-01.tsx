import React from "react";
const Alien_01: React.FC<
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
        d="M12 1.25c-5.354 0-9.75 3.783-9.75 9.75 0 3.018 1.626 5.94 3.57 8.076.98 1.076 2.065 1.981 3.118 2.622 1.034.63 2.112 1.052 3.062 1.052s2.028-.422 3.062-1.052c1.053-.64 2.138-1.546 3.118-2.622 1.944-2.135 3.57-5.058 3.57-8.076 0-5.967-4.396-9.75-9.75-9.75m-1.25 11.417A3.417 3.417 0 0 0 7.333 9.25H5.25v2.083a3.417 3.417 0 0 0 3.417 3.417h2.083zm2.5 0a3.417 3.417 0 0 1 3.417-3.417h2.083v2.083a3.417 3.417 0 0 1-3.417 3.417H13.25zM10 17v2h4v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Alien_01;
