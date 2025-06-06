import React from "react";
const WasteRestore: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m3.25 4.968 6.312.028m0 0L11.45 2.41a1 1 0 0 1 .808-.41h5.422a1 1 0 0 1 .933.64l.91 2.356m-9.961 0h9.96m-.007-.028.008.028m0 0h1.727"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m19.75 5-.5 6.5M5.25 5l.883 14.125A2 2 0 0 0 8.129 21H9.75M19.765 16.286C19.14 14.934 17.8 14 16.25 14c-1.96 0-3.5 1.5-4 3l-1-2m1.485 4.714C13.36 21.066 14.7 22 16.25 22c1.96 0 3.5-1.5 4-3l1 2"
      />
    </svg>
  );
};
export default WasteRestore;
