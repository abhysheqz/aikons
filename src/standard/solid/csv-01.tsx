import React from "react";
const Csv_01: React.FC<
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
        d="M3.25 4.135c0-1.595 1.308-2.887 2.92-2.885l6.8.007c.256 0 .503.102.685.281l6.81 6.723c.182.18.285.425.285.68v3.847c0 .255-.102.5-.285.68a.98.98 0 0 1-.687.282H4.222a.967.967 0 0 1-.972-.962zm15.556 5.206-6.24-6.16v4.66a1.5 1.5 0 0 0 1.5 1.5zM16.149 14.814a1 1 0 0 1 1.287.585l1.314 3.503 1.314-3.503a1 1 0 0 1 1.872.702l-2.25 6a1 1 0 0 1-1.872 0l-2.25-6a1 1 0 0 1 .585-1.287M1.999 16.75a2 2 0 0 1 2-2h1.5a2 2 0 0 1 2 2 1 1 0 1 1-2 0H4v4h1.5a1 1 0 0 1 2 0 2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm7 0a2 2 0 0 1 2-2h2a1 1 0 0 1 0 2h-2v1h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2a1 1 0 1 1 0-2h2v-1h-1a2 2 0 0 1-2-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Csv_01;
