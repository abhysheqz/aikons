import React from "react";
const PermanentJob: React.FC<
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
        d="M5 5h2v2H5zm4 0h2v2H9zM5 8h2v2H5zm4 0h2v2H9z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.227 1.25a.977.977 0 0 0-.977.977v8.796h1.955V3.205h9.772v18.568c0 .54.438.977.977.977h7.819a.98.98 0 0 0 .977-.977V8.09a.977.977 0 0 0-.977-.977h-6.841V2.227a.977.977 0 0 0-.978-.977zm16.773 9h-2v1.5h2zm0 4h-2v1.5h2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.25 14a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M2.63 18.744c.842-.877 2.03-1.494 3.37-1.494s2.528.617 3.37 1.494c.837.873 1.38 2.053 1.38 3.256a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75c0-1.203.543-2.383 1.38-3.256"
      />
    </svg>
  );
};
export default PermanentJob;
