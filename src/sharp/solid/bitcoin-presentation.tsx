import React from "react";
const BitcoinPresentation: React.FC<
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
        d="M13 17.75v5h-2v-5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 1.25h21.5v3.5H1.25zM7.688 12.25v-1.167h2.375c.058 0 .187.066.187.25V12c0 .184-.129.25-.187.25zM7.688 13.75h2.375c.058 0 .187.066.187.25v.667c0 .184-.129.25-.187.25H7.687z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 6.25V19c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V6.25zm14.25 5.5h-3v-1.5h3zm2 4h-5v-1.5h5zM9.25 9.583V8.25h-1.5v1.333h-2.5v1.5h.938v3.834H5.25v1.5h2.5v1.333h1.5v-1.333h.813c.976 0 1.687-.83 1.687-1.75V14c0-.363-.11-.71-.303-1 .193-.29.303-.638.303-1v-.667c0-.92-.71-1.75-1.687-1.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinPresentation;
