import React from "react";
const Atom_02: React.FC<
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
        d="M20.354 3.646C18.51 1.8 13.272 4.045 8.658 8.658c-4.613 4.614-6.858 9.85-5.012 11.696 1.845 1.846 7.082-.398 11.696-5.012s6.858-9.85 5.012-11.696"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.646 3.646C1.8 5.49 4.045 10.728 8.658 15.342c4.614 4.614 9.85 6.858 11.696 5.012 1.846-1.845-.398-7.082-5.012-11.696S5.492 1.8 3.646 3.646"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.009 12H12"
      />
    </svg>
  );
};
export default Atom_02;
