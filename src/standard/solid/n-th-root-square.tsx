import React from "react";
const NThRootSquare: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM7 5.5a1 1 0 0 1 .904.572Q8.19 6 8.5 6A2.5 2.5 0 0 1 11 8.5V10a1 1 0 1 1-2 0V8.5a.5.5 0 0 0-1 0V10a1 1 0 1 1-2 0V6.5a1 1 0 0 1 1-1M13.618 9a2 2 0 0 0-1.789 1.106L9.5 14.764l-.485-.97a2 2 0 0 0-3.203-.52l-.52.519a1 1 0 1 0 1.415 1.414l.519-.519 1.38 2.76a1 1 0 0 0 1.788 0L13.618 11H18a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NThRootSquare;
