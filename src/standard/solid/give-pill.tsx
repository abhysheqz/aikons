import React from "react";
const GivePill: React.FC<
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
        d="M14 1.25A3.75 3.75 0 0 0 10.25 5v1.25h7.5V5A3.75 3.75 0 0 0 14 1.25m3.75 6.5h-7.5V9a3.75 3.75 0 1 0 7.5 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4 13.25a.75.75 0 0 0-.75.75v6.02c0 .335.223.63.546.722l6.254 1.769a2.75 2.75 0 0 0 1.978-.187l7.585-3.792a1.627 1.627 0 0 0 .783-2.06 2.75 2.75 0 0 0-3.423-1.587l-2.423.808c.223.494.33.998.33 1.43a.65.65 0 0 1-.45.618l-3.914 1.275a1.65 1.65 0 0 1-1.032-.004l-2.688-.896a.65.65 0 1 1 .411-1.233l2.688.896a.35.35 0 0 0 .219 0l3.407-1.109a2.5 2.5 0 0 0-.246-.624 3.27 3.27 0 0 0-1.57-1.209 3.5 3.5 0 0 0-1.205-.212h-.807l-1.881-1.034a2.75 2.75 0 0 0-1.326-.341z"
      />
    </svg>
  );
};
export default GivePill;
