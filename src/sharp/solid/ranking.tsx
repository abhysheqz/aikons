import React from "react";
const Ranking: React.FC<
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
        d="M8.25 13a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        d="M3 14.75a1 1 0 0 1 1-1h5v2H5v5h14v-3h-4v-2h5a1 1 0 0 1 1 1v4h1v2H2v-2h1zM12 1.25a.75.75 0 0 1 .605.307l1.514 2.065 2.58.71a.75.75 0 0 1 .38 1.2l-1.621 1.97.073 2.476a.75.75 0 0 1-.986.734L12 9.866l-2.545.846a.75.75 0 0 1-.986-.734l.073-2.476-1.621-1.97a.75.75 0 0 1 .38-1.2l2.58-.71 1.514-2.065A.75.75 0 0 1 12 1.25"
      />
    </svg>
  );
};
export default Ranking;
