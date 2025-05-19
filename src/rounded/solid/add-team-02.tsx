import React from "react";
const AddTeam_02: React.FC<
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
        d="M10.5 3.25a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5M16 7.5a5.49 5.49 0 0 1-1.977 4.224q.236.026.477.026a4.25 4.25 0 1 0-.477-8.474A5.49 5.49 0 0 1 16 7.5m2.75 5.25a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1m-3.129 1.562q.187.086.356.188h-.227a2.25 2.25 0 0 0 0 4.5h.75v.75c0 .3.059.585.165.847a2.3 2.3 0 0 1-.468.11c-.323.043-.72.043-1.152.043h-9.09c-.433 0-.83 0-1.152-.043-.356-.048-.731-.16-1.04-.47s-.422-.684-.47-1.04c-.043-.323-.043-.794-.043-1.227 0-1.436.65-2.984 2.129-3.658C6.86 13.636 8.62 13.25 10.5 13.25s3.64.386 5.121 1.062"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AddTeam_02;
