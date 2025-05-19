import React from "react";
const Briefcase_04: React.FC<
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
        d="M2.5 5.25a.75.75 0 0 0-.75.75v5.401l5.023 3.349h10.454l5.023-3.349V6a.75.75 0 0 0-.75-.75zM11.996 10A1 1 0 0 0 11 11c0 .552.446 1 .995 1h.01c.55 0 .995-.448.995-1s-.446-1-.995-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5 2.75a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v3.5h-2v-2.5h-5v2.5h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.75 13.87v7.63c0 .414.336.75.75.75h17a.75.75 0 0 0 .75-.75v-7.63l-3.569 2.38H6.32z"
      />
    </svg>
  );
};
export default Briefcase_04;
