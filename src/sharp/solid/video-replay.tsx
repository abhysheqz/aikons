import React from "react";
const VideoReplay: React.FC<
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
        d="M2.25 3.225c0-.539.437-.975.975-.975h17.55c.539 0 .975.436.975.975v15.472l-4.44-2.961 1.08-1.623 1.41.94V4.2H4.2v15.6h12.675v1.95H3.225a.975.975 0 0 1-.975-.975z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M9.75 16V8l6.5 4z" />
    </svg>
  );
};
export default VideoReplay;
