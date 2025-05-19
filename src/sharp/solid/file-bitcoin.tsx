import React from "react";
const FileBitcoin: React.FC<
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
        d="M16.75 12h-2v9h2v1h2v-1h.5c1.52 0 2.5-1.381 2.5-2.75 0-.625-.204-1.253-.571-1.75a3 3 0 0 0 .571-1.75c0-1.369-.98-2.75-2.5-2.75h-.5v-1h-2zm2.5 3.5c.083 0 .193-.037.301-.163a.9.9 0 0 0 .199-.587.9.9 0 0 0-.199-.587c-.108-.126-.218-.163-.301-.163h-2.5v1.5zm-2.5 2h2.5c.083 0 .193.037.301.163.11.129.199.333.199.587a.9.9 0 0 1-.199.587c-.108.126-.218.163-.301.163h-2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.776 1.25c.538 0 .974.438.974.977v6.841h-1.947V3.205h-7.79v6.84H4.197v10.75h8.764v1.955H3.223a.975.975 0 0 1-.974-.977V8.663L9.636 1.25z"
      />
    </svg>
  );
};
export default FileBitcoin;
