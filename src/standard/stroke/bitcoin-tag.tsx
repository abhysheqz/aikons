import React from "react";
const BitcoinTag: React.FC<
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
        d="M22 2H12l-8.586 8.586a2 2 0 0 0 0 2.828l7.172 7.172a2 2 0 0 0 2.828 0L22 12z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M12.853 12.853l-1.482-1.482m1.482 1.482a1.258 1.258 0 1 0 1.779-1.778l-.593-.593m-1.186 2.371a1.258 1.258 0 0 1-1.778 1.779l-.593-.593m.89-2.668 1.778-1.778M11.37 11.37 9.593 13.15M12.557 9l.593.594m0 0 .889.889M9.593 13.15 9 12.557m.593.592.89.89m3.556-3.557.593-.593m-4.15 4.15-.593.593"
      />
    </svg>
  );
};
export default BitcoinTag;
