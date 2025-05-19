import React from "react";
const Simcard_02: React.FC<
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
        d="M6 1.25A3.75 3.75 0 0 0 2.25 5v14A3.75 3.75 0 0 0 6 22.75h12A3.75 3.75 0 0 0 21.75 19V7.828c0-.729-.29-1.428-.805-1.944l-3.829-3.829a2.75 2.75 0 0 0-1.944-.805zM8 10a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2zm1 5.5H8V17h8v-1.5h-1a1 1 0 1 1 0-2h1V12H8v1.5h1a1 1 0 1 1 0 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Simcard_02;
