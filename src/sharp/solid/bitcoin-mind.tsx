import React from "react";
const BitcoinMind: React.FC<
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
        d="M1.75 10c0 2.868 1.398 5.41 3.55 7.004v5.746h10.95v-2h.011c1.777-.014 3.315-1.25 3.682-2.983l.465-2.296 1.471-.895a.75.75 0 0 0 .223-1.075l-2.655-3.74a2 2 0 0 0 .002-.403l-.005-.087c-.376-4.5-4.194-8.021-8.832-8.021C5.728 1.25 1.75 5.158 1.75 10m9.5-3.417V5.25h-1.5v1.333h-2.5v1.5h.938v3.834H7.25v1.5h2.5v1.333h1.5v-1.333h.813c.976 0 1.687-.83 1.687-1.75V11c0-.362-.11-.71-.303-1 .193-.29.303-.638.303-1v-.667c0-.92-.71-1.75-1.687-1.75zM9.688 9.25V8.083h2.374c.06 0 .188.066.188.25V9c0 .184-.129.25-.187.25zm0 1.5h2.374c.06 0 .188.066.188.25v.667c0 .184-.129.25-.187.25H9.687z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinMind;
