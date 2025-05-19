import React from "react";
const AlphabetGreek: React.FC<
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
        d="M11.75 3.95c-3.673 0-6.84 3.381-6.84 7.8 0 3.624 2.139 6.101 4.939 7.964a.974.974 0 0 1-.542 1.786H2.955A1.95 1.95 0 0 1 1 19.55v-.975a.976.976 0 0 1 1.955 0v.975H6.49c-2.028-1.907-3.536-4.426-3.536-7.8C2.955 6.476 6.787 2 11.75 2s8.796 4.476 8.796 9.75c0 3.374-1.509 5.893-3.536 7.8h3.535v-.975c0-.538.438-.975.978-.975s.977.436.977.975v.975c0 1.077-.875 1.95-1.954 1.95h-6.353a.974.974 0 0 1-.542-1.786c2.8-1.863 4.94-4.34 4.94-7.964 0-4.419-3.168-7.8-6.841-7.8"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AlphabetGreek;
