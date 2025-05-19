import React from "react";
const FilePound: React.FC<
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
        d="M18.086 12.858c1.944-.515 3.412.855 3.65 2.298l-1.973.326a.92.92 0 0 0-.368-.577c-.181-.129-.439-.208-.796-.113-.292.077-.576.335-.738.757-.165.43-.133.858.007 1.118q.071.13.145.273h1.737v2h-1.092a4.15 4.15 0 0 1-.228 1.81h3.32v2h-7l1.2-1.6c.631-.842.753-1.469.723-1.948a2 2 0 0 0-.033-.262h-1.89v-2h1.097c-.178-.708-.1-1.463.146-2.106.33-.862 1.031-1.694 2.093-1.976"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.776 1.25c.538 0 .974.438.974.977v8.841h-1.947V3.205h-7.79v6.84H4.197v10.75h8.764v1.955H3.223a.975.975 0 0 1-.974-.977V8.663L9.636 1.25z"
      />
    </svg>
  );
};
export default FilePound;
