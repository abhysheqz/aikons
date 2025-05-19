import React from "react";
const MedicalFile: React.FC<
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
        d="M9.998 16.5h2l2.399 4.5 2.2-7 2.399 4.5h2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.013 21.999H3.003a.01.01 0 0 1-.01-.01V9.001l7.003-6.999h9.994a.01.01 0 0 1 .01.01v9.957M9.997 2.58V9H3.42"
      />
    </svg>
  );
};
export default MedicalFile;
