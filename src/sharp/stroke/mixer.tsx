import React from "react";
const Mixer: React.FC<
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
        d="M4.015 8.502v12.5M2.019 21.002H22"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.986 15.002h-6.988v2.516a3.49 3.49 0 0 0 3.494 3.484c1.93 0 3.494-1.56 3.494-3.484z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.491 11.002v4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 6.002h-.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.025 8.474H2.1a.1.1 0 0 1-.1-.1V3.1a.1.1 0 0 1 .1-.1h17.762a.1.1 0 0 1 .1.1v7.783a.1.1 0 0 1-.1.1H15.03l-1.003-2.476H9.997v8.548c0 1.358.96 3.758 3.804 3.946"
      />
    </svg>
  );
};
export default Mixer;
