import React from "react";
const Tumblr: React.FC<
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
        d="M13.754 2h-3.24C9.93 5.866 7.285 7.141 6 7.581v3.491q.001.01.01.01h3.037v5.025c0 1.789.468 2.706.824 3.305 2.104 3.549 6.415 2.757 8.126 1.66a.01.01 0 0 0 .004-.01l-.994-3.42a.01.01 0 0 0-.013-.008c-2.213.665-3.03-.004-3.229-1.001v-5.55h3.864a.01.01 0 0 0 .01-.01V7.591a.01.01 0 0 0-.01-.01h-3.864V2.01a.01.01 0 0 0-.01-.01Z"
      />
    </svg>
  );
};
export default Tumblr;
