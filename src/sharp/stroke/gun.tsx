import React from "react";
const Gun: React.FC<
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
        d="M8.983 14.982h.875c.949 0 1.423 0 1.838-.09a3.99 3.99 0 0 0 2.74-2.14c.188-.383.303-.843.533-1.764"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 7.991h3.99l1.996-2.995"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.952 7.992h-2.993"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.491 10.98h11.392a.1.1 0 0 0 .1-.1V3.597a.1.1 0 0 0-.153-.085l-2.382 1.487H1.988v5.984c1.426 0 2.201 1.278 1.995 2.193L2.011 20.37a.1.1 0 0 0 .096.126h7.784a.1.1 0 0 0 .078-.162l-1.46-1.838zm0 0H8.003"
      />
    </svg>
  );
};
export default Gun;
