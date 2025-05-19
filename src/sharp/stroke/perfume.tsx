import React from "react";
const Perfume: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.06 8.99V5.994h4.981V8.99"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.045 5.996V3H8.057v2.996"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.014 7.991c1.65 0 2.988-1.34 2.988-2.995a2.99 2.99 0 0 0-2.988-2.995 2.99 2.99 0 0 0-2.988 2.995 2.99 2.99 0 0 0 2.988 2.995"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.069 3.997h2.988m2.988 0h4.98"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m10.326 8.962-3.43.1c-2.065.621-4.367 3.067-4.829 6.077S3.557 21.003 4.585 22h9.942c.813-.713 2.8-3.079 2.415-6.86-.287-2.82-2.107-4.617-3.647-5.556-.883-.538-1.936-.653-2.969-.622Z"
      />
    </svg>
  );
};
export default Perfume;
