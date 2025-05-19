import React from "react";
const AirplayLine: React.FC<
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
        d="M1.25 3.219c0-.535.438-.969.977-.969h19.546c.54 0 .977.434.977.969V16.78a.973.973 0 0 1-.977.969h-3.91v-1.937h2.933V4.188H3.204v11.625h2.931v1.937H2.227a.973.973 0 0 1-.977-.969z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12 12.25a.75.75 0 0 1 .636.352l5 8A.75.75 0 0 1 17 21.75H7a.75.75 0 0 1-.636-1.148l5-8A.75.75 0 0 1 12 12.25"
      />
    </svg>
  );
};
export default AirplayLine;
