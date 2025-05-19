import React from "react";
const BitcoinDown_01: React.FC<
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
        d="M12 22.75a1 1 0 0 0 .707-.293l3-3-1.414-1.414L13 19.336V17h-2v2.336l-1.293-1.293-1.414 1.414 3 3a1 1 0 0 0 .707.293M12 1.25a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5m.75 3.833V3.75h-1.5v1.333h-2.5v1.5h.938v3.834H8.75v1.5h2.5v1.333h1.5v-1.333h.813c.976 0 1.687-.83 1.687-1.75V9.5c0-.362-.11-.71-.303-1 .193-.29.303-.638.303-1v-.667c0-.92-.71-1.75-1.687-1.75zM11.188 7.75V6.583h2.374c.06 0 .188.066.188.25V7.5c0 .184-.129.25-.187.25zm0 1.5h2.374c.06 0 .188.066.188.25v.667c0 .184-.129.25-.187.25h-2.376z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinDown_01;
