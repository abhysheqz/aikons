import React from "react";
const City_01: React.FC<
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
        d="M3.527 11.536a.93.93 0 0 1 .667-.286H7.5v1.954H5.139V22H3.25v-9.773c0-.259.1-.508.277-.69M12.72 1.383a.91.91 0 0 1 .943-.003l7.087 4.237V22h-1.889V6.764L14.14 3.94v3.933H12.25V2.238c0-.352.18-.678.47-.855"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5 7.25a.75.75 0 0 0-.75.75v14c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8a.75.75 0 0 0-.75-.75zm3 5.5h3v-1.5h-3zm0 3h3v-1.5h-3zm0 3h3v-1.5h-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 20.75h20v2H2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default City_01;
