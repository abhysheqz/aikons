import React from "react";
const DocumentCode: React.FC<
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
        strokeWidth={1.5}
        d="M17.997 16.003 21.002 19l-3.005 2.998M14.993 16.003 11.989 19l3.004 2.998"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.02 13.02V2.102a.1.1 0 0 0-.1-.1H9.955l-6.957 7V21.89a.1.1 0 0 0 .1.1h6.877M9.96 2.473l.06 6.53H3.566"
      />
    </svg>
  );
};
export default DocumentCode;
