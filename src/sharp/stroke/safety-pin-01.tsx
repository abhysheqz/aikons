import React from "react";
const SafetyPin_01: React.FC<
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
        d="M20.206 10.454 18 12l-1.567-1.923.97-.89c.888-.694.979-1.999.194-2.784s-2.09-.695-2.783.193l-1.027 1.048-2.047-1.903 1.806-1.947c1.724-2.226 5.03-2.409 7.05-.39 2.018 2.019 1.836 5.325-.39 7.05"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20.208 10.454 18.002 12l-1.567-1.923.97-.89c.888-.694.979-1.999.194-2.784s-2.09-.695-2.783.193l-1.027 1.048-2.047-1.903 1.806-1.947c1.724-2.226 5.03-2.409 7.05-.39 2.018 2.019 1.836 5.325-.39 7.05Z"
      />
      <circle
        cx={4.5}
        cy={19.5}
        r={2.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 17.41 12 7M6.59 21 17 12"
      />
    </svg>
  );
};
export default SafetyPin_01;
