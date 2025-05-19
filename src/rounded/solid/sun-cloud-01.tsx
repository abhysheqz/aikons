import React from "react";
const SunCloud_01: React.FC<
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
        d="M1.375 15.125A5.75 5.75 0 0 1 5.978 9.49a6.252 6.252 0 0 1 12.394.938 5.251 5.251 0 0 1-.747 10.447h-10.5a5.75 5.75 0 0 1-5.75-5.75"
      />
      <path
        fill="currentColor"
        d="M3.125 7.982a2.85 2.85 0 0 1 2.844-2.857c.78 0 1.488.315 2.003.829a6.3 6.3 0 0 1 1.715-1.086 4.83 4.83 0 0 0-3.718-1.743 4.85 4.85 0 0 0-4.844 4.857 4.85 4.85 0 0 0 1.523 3.535 5.8 5.8 0 0 1 1.52-1.324 2.85 2.85 0 0 1-1.043-2.211"
      />
    </svg>
  );
};
export default SunCloud_01;
