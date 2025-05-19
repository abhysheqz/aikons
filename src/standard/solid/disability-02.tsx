import React from "react";
const Disability_02: React.FC<
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
        d="M7.697 9.504a2 2 0 0 1 2.58-1.07l1.595.638a1 1 0 0 1-.743 1.857l-1.594-.638-1.116 2.604a1 1 0 0 1-1.838-.788zM11.25 3.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M5.409 12.588a1 1 0 0 1 .504 1.321c-.273.608-.413 1.299-.413 2.05C5.5 18.739 7.765 21 10.57 21a5.07 5.07 0 0 0 4.12-2.103 1 1 0 0 1 1.62 1.172A7.07 7.07 0 0 1 10.57 23c-3.9 0-7.07-3.148-7.07-7.041 0-1 .187-1.974.587-2.868a1 1 0 0 1 1.322-.503"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.985 7.059a1 1 0 0 1 .605 1.278L11.92 13h3.505a2 2 0 0 1 1.727.992l3.21 5.504a1 1 0 1 1-1.727 1.008L15.425 15H11.92a2 2 0 0 1-1.883-2.674l1.67-4.663a1 1 0 0 1 1.278-.604"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Disability_02;
