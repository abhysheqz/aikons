import React from "react";
const TextSelection: React.FC<
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
        d="M2 4a1 1 0 0 1 1-1h1.5c.98 0 1.865.402 2.5 1.05A3.5 3.5 0 0 1 9.5 3H11a1 1 0 1 1 0 2H9.5A1.5 1.5 0 0 0 8 6.5V11h1a1 1 0 1 1 0 2H8v4.5A1.5 1.5 0 0 0 9.5 19H11a1 1 0 1 1 0 2H9.5A3.5 3.5 0 0 1 7 19.95 3.5 3.5 0 0 1 4.5 21H3a1 1 0 1 1 0-2h1.5A1.5 1.5 0 0 0 6 17.5V13H5a1 1 0 1 1 0-2h1V6.5A1.5 1.5 0 0 0 4.5 5H3a1 1 0 0 1-1-1M18.069 12c-.646 0-1.25.323-1.607.86l-.13.195a1 1 0 1 1-1.664-1.11l.13-.194A3.931 3.931 0 0 1 22 13.93V19.5a1 1 0 0 1-1.791.612 5 5 0 0 1-.391.263l-.153.092a3.74 3.74 0 0 1-1.924.533h-.302c-1.9 0-3.44-1.54-3.44-3.44A3.56 3.56 0 0 1 17.562 14H20v-.069A1.93 1.93 0 0 0 18.069 12m1.93 4h-2.438c-.862 0-1.561.699-1.561 1.56 0 .796.644 1.44 1.439 1.44h.302c.315 0 .625-.086.895-.248l.153-.092a2.5 2.5 0 0 0 1.21-2.139z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextSelection;
