import React from "react";
const GitPullRequest: React.FC<
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
        d="M6 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1M14.5 7.042q.361.021.658.06c.706.096 1.033.263 1.256.486.222.222.39.55.485 1.255.098.735.1 1.716.1 3.159v6a1 1 0 0 0 2 0v-6.07c0-1.355 0-2.472-.118-3.355-.125-.928-.397-1.748-1.053-2.404s-1.476-.928-2.403-1.052a12 12 0 0 0-.925-.082z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.5 4.412c0-.176 0-.392-.022-.568V3.84c-.016-.127-.088-.703-.653-.977-.567-.275-1.067.027-1.176.092l-.468.34c-.376.294-.89.7-1.281 1.08-.195.19-.397.407-.556.638-.14.205-.344.555-.344.986s.203.78.345.986c.158.231.36.448.555.638.39.38.905.786 1.28 1.08l.47.34c.108.065.608.367 1.175.092.565-.274.637-.85.653-.977v-.003c.022-.176.022-.392.022-.568z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 18a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M3.25 6a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M15.25 18a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GitPullRequest;
