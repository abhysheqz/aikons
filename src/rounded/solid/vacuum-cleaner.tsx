import React from "react";
const VacuumCleaner: React.FC<
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
        d="M6.77 4.2a3.56 3.56 0 0 0-3.565 3.558v.184c0 .977.43 1.879 1.139 2.493a1.78 1.78 0 0 1 1.68-1.185c3.318 0 6.183 2.316 6.783 5.533l.913 4.9c.205 1.098-.66 2.067-1.746 2.067H9.26A4.25 4.25 0 0 0 4.25 15v-2.316a5.25 5.25 0 0 1-3-4.742v-.184A5.514 5.514 0 0 1 6.77 2.25a7.69 7.69 0 0 1 6.952 4.395L19.95 19.8h1.824a.976.976 0 1 1 0 1.95h-5.375a.976.976 0 1 1 0-1.95h1.39L11.954 7.477A5.73 5.73 0 0 0 6.77 4.2M3.25 18.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VacuumCleaner;
