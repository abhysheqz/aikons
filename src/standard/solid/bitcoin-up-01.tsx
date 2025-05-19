import React from "react";
const BitcoinUp_01: React.FC<
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
        d="M12.252 1a.9.9 0 0 1 .636.263l2.5 2.5a.9.9 0 0 1-1.273 1.273l-.963-.963V6.4a.9.9 0 0 1-1.8 0V4.073l-.964.963a.9.9 0 0 1-1.273-1.272l2.5-2.5A.9.9 0 0 1 12.252 1M12.25 8.15a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5M13 11.4a.75.75 0 0 0-1.5 0v.584H9.75a.75.75 0 0 0 0 1.5h.188v3.833H9.75a.75.75 0 1 0 0 1.5h1.75v.583a.75.75 0 0 0 1.5 0v-.583h.813c.976 0 1.687-.83 1.687-1.75V16.4c0-.362-.11-.71-.303-1 .193-.289.303-.637.303-1v-.666c0-.92-.71-1.75-1.687-1.75H13zm-1.562 3.25v-1.166h2.374c.06 0 .188.065.188.25v.666c0 .185-.129.25-.187.25zm0 1.5h2.374c.06 0 .188.066.188.25v.667c0 .184-.129.25-.187.25h-2.376z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinUp_01;
