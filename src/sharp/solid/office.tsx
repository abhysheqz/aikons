import React from "react";
const Office: React.FC<
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
        d="M5 6h2v2H5zm4 0h2v2H9zm-4 4h2v2H5zm4 0h2v2H9zm-2 6H5v-2h2zm4 0H9v-2h2zM14 7.25a.75.75 0 0 0-.75.75v14c0 .414.336.75.75.75h8a.75.75 0 0 0 .75-.75V8a.75.75 0 0 0-.75-.75zm5 3h-2v1.5h2zm0 4h-2v1.5h2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 2.227a.97.97 0 0 1 .964-.977h11.572a.97.97 0 0 1 .964.977v19.546a.97.97 0 0 1-.964.977H2.214a.96.96 0 0 1-.682-.286.98.98 0 0 1-.282-.691zm1.929.978v17.59h9.642V3.205z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Office;
