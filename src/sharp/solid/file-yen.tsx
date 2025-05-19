import React from "react";
const FileYen: React.FC<
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
        d="m16.95 17.083-2.8-3.733 1.6-1.2 2.2 2.933 2.2-2.933 1.6 1.2-2.8 3.733v.667h2v2h-2v3h-2v-3h-2v-2h2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.776 1.25c.538 0 .974.438.974.977v7.841h-1.948V3.205h-7.789v6.84H4.197v10.75h8.763v1.955H3.223a.975.975 0 0 1-.973-.977V8.663L9.636 1.25z"
      />
    </svg>
  );
};
export default FileYen;
