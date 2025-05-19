import React from "react";
const PlayCircle: React.FC<
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
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 14.409V9.59c0-.852 1.074-1.374 1.908-.928l4.496 2.409c.795.426.795 1.43 0 1.856l-4.496 2.409C10.074 15.783 9 15.26 9 14.409Z"
      />
    </svg>
  );
};
export default PlayCircle;
