import React from "react";
const MusicNote_01: React.FC<
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
        d="M7.71 1.043a1 1 0 0 1 1.122.402c.1.151.173.319.218.429.028.067.063.157.096.24l.054.138c.102.255.214.507.367.746.284.443.723.87 1.597 1.016a1 1 0 1 1-.329 1.972C10.08 5.86 9.48 5.595 9 5.258V9.5a3.5 3.5 0 1 1-2-3.163V2a1 1 0 0 1 .71-.957"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.316 18a2.85 2.85 0 1 1 5.7 0 2.85 2.85 0 0 1-5.7 0m-10 1.5a3.35 3.35 0 1 1 6.7 0 3.35 3.35 0 0 1-6.7 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 6a1 1 0 0 0-1.316-.949l-9 3A1 1 0 0 0 11 9v10.5h2v-4.78l7-2.333v5.539h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MusicNote_01;
