import React from "react";
const Route_02: React.FC<
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
        d="M18.719 10.715a1.044 1.044 0 0 1-1.437 0c-1.765-1.683-4.13-3.564-2.977-6.294C14.929 2.945 16.425 2 18 2s3.072.945 3.695 2.42c1.152 2.728-1.207 4.617-2.977 6.295Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 6h.009"
      />
      <circle
        cx={5}
        cy={19}
        r={3}
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
        d="M11 7H9.5C7.567 7 6 8.343 6 10s1.567 3 3.5 3h3c1.933 0 3.5 1.343 3.5 3s-1.567 3-3.5 3H11"
      />
    </svg>
  );
};
export default Route_02;
