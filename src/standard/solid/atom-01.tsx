import React from "react";
const Atom_01: React.FC<
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
        d="M2 8.5a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m17.99 0a1 1 0 0 1 1-1H21a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1m-9 13a1 1 0 0 1 1-1H12a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M17.28 5.413a8.536 8.536 0 0 0-10.77 0 1 1 0 1 1-1.264-1.55 10.536 10.536 0 0 1 13.297 0 1 1 0 0 1-1.263 1.55M2.39 12.048a1 1 0 0 1 1.104.883 8.46 8.46 0 0 0 4.72 6.67 1 1 0 1 1-.873 1.799 10.46 10.46 0 0 1-5.835-8.248 1 1 0 0 1 .884-1.104m19.22 0a1 1 0 0 1 .884 1.104 10.46 10.46 0 0 1-5.835 8.248 1 1 0 0 1-.873-1.8 8.46 8.46 0 0 0 4.72-6.669 1 1 0 0 1 1.104-.883M7.25 12a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Atom_01;
