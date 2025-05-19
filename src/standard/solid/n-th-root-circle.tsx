import React from "react";
const NThRootCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M8 6a1 1 0 0 1 .904.572Q9.19 6.5 9.5 6.5A2.5 2.5 0 0 1 12 9v1.5a1 1 0 1 1-2 0V9a.5.5 0 0 0-1 0v1.5a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m6.618 3a2 2 0 0 0-1.789 1.106L10.5 14.764l-.485-.97a2 2 0 0 0-3.203-.52l-.52.519a1 1 0 1 0 1.415 1.414l.52-.519 1.379 2.76a1 1 0 0 0 1.788 0L14.618 11H18a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NThRootCircle;
