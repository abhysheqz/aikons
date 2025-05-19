import React from "react";
const LanguageSkill: React.FC<
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
        strokeWidth={1.5}
        d="M2 12c0 1.052.18 2.062.512 3M11 15H2.512m0 0A9 9 0 0 0 11 21c-1.544 0-3-4-3-9M21.488 8h-5.67m5.67 0A9 9 0 0 0 13 2c1.219 0 2.382 2.492 2.819 6m5.669 0c.332.938.512 1.948.512 3m-6.181-3H13m2.819 0c.116.937.181 1.946.181 3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 14h-8v8l2.5-1.5H22zM2 2h8v8L7.5 8.5H2z"
      />
    </svg>
  );
};
export default LanguageSkill;
