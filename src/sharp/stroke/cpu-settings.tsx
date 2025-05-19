import React from "react";
const CpuSettings: React.FC<
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
        d="M9.492 2v2.5M14.488 2v2.5M9.498 19.5V22M4.496 9.5H1.998m2.498 5H1.998"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.485 20.214V22m0-1.786a3.36 3.36 0 0 1-2.772-1.43m2.772 1.43a3.36 3.36 0 0 0 2.771-1.43m-5.543 0L12.988 20m1.725-1.217a3.12 3.12 0 0 1 0-3.566m5.543 3.566L21.981 20m-1.725-1.217a3.12 3.12 0 0 0 0-3.566m-2.771-1.431a3.36 3.36 0 0 1 2.771 1.43m-2.771-1.43a3.36 3.36 0 0 0-2.772 1.43m2.772-1.43V12m2.771 3.217L21.981 14m-7.268 1.217L12.988 14"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.99 8H7.991"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.058 19.5H4.596a.1.1 0 0 1-.1-.1V4.6a.1.1 0 0 1 .1-.1h14.796a.1.1 0 0 1 .1.1v4.885h2.51"
      />
    </svg>
  );
};
export default CpuSettings;
