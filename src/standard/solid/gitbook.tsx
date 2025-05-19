import React from "react";
const Gitbook: React.FC<
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
        d="M9.984 3.877a6.56 6.56 0 0 1 6.181-.197l6.28 3.125a1 1 0 0 1 .018 1.782l-9.474 4.948a1 1 0 0 1-.888.018l-6.298-2.96C4.433 9.95 3 10.933 3 12.145c0 1.44.834 2.8 2.234 3.524l5.712 2.953c.98.506 2.175.504 3.152-.006l6.356-3.32c.359-.187.546-.52.546-.844V13.31l-8.01 4.184a1 1 0 0 1-.915.006l-6.842-3.464a1 1 0 1 1 .903-1.784l6.383 3.23 9.018-4.709A1 1 0 0 1 23 11.66v2.793c0 1.114-.642 2.106-1.62 2.617l-6.356 3.32a5.45 5.45 0 0 1-4.996.01l-5.712-2.954C2.293 16.4 1 14.378 1 12.145c0-1.909 1.05-3.652 2.727-4.627z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Gitbook;
