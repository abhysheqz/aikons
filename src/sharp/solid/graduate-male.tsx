import React from "react";
const GraduateMale: React.FC<
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
        d="M11.637 1.345a.75.75 0 0 1 .73 0l10 5.568a.75.75 0 0 1 .106 1.237l-2.723 2.202v4.887c0 3.014-2.024 4.899-3.87 5.985a14 14 0 0 1-2.545 1.153c-.346.117-.635.201-.84.256a19 19 0 0 1-.495.117l-.092-.021c-.124-.029-.327-.076-.403-.096a14 14 0 0 1-.84-.256 14 14 0 0 1-2.546-1.153C6.274 20.138 4.25 18.253 4.25 15.24v-4.89L1.528 8.151a.75.75 0 0 1 .107-1.238zM18.25 12.24H5.75v2.998c0 2.232 1.476 3.72 3.13 4.694.819.481 1.643.813 2.267 1.025.31.105.675.207.853.255a12.352 12.352 0 0 0 3.12-1.28c1.654-.975 3.13-2.462 3.13-4.694z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GraduateMale;
