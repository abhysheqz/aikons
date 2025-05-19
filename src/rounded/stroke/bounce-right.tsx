import React from "react";
const BounceRight: React.FC<
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
        d="M15 10c-2.115 3.01-3.105 7.153-3.752 10.086-.131.596-.197.895-.335.913s-.28-.265-.561-.833C9.006 17.458 6.217 15.062 4 17.108"
      />
      <circle
        cx={18}
        cy={5}
        r={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default BounceRight;
