import React from "react";
const Quran_02: React.FC<
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
        d="M3.25 19.5v-14A4.25 4.25 0 0 1 7.5 1.25h10a4.25 4.25 0 0 1 4.25 4.25V17a.75.75 0 0 1-.75.75H6.5a1.75 1.75 0 0 0-1.75 1.75.75.75 0 0 1-1.5 0M13.76 6.114a.35.35 0 0 0 .247.102h1.43c.193 0 .349.156.349.348v1.431c0 .093.037.181.102.247L16.9 9.254a.35.35 0 0 1 0 .492l-1.012 1.012a.35.35 0 0 0-.102.247v1.43a.35.35 0 0 1-.348.349h-1.431a.35.35 0 0 0-.247.102l-1.012 1.012a.35.35 0 0 1-.492 0l-1.012-1.012a.35.35 0 0 0-.247-.102h-1.43a.35.35 0 0 1-.35-.348v-1.431a.35.35 0 0 0-.101-.247L8.104 9.746a.35.35 0 0 1 0-.492l1.012-1.012a.35.35 0 0 0 .102-.247v-1.43c0-.193.156-.349.348-.349h1.431a.35.35 0 0 0 .247-.102l1.012-1.012a.35.35 0 0 1 .492 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Quran_02;
