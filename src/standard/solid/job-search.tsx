import React from "react";
const JobSearch: React.FC<
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
        d="M7.082 2.45A2 2 0 0 1 9.005 1h4.491a2 2 0 0 1 1.923 1.45l.793 2.775-1.923.55L13.496 3H9.005l-.793 2.775-1.923-.55zM12.75 17.327a4.527 4.527 0 1 1 8.354 2.418l1.352 1.348a1 1 0 1 1-1.412 1.416l-1.355-1.35a4.527 4.527 0 0 1-6.939-3.83m4.526-2.526a2.526 2.526 0 1 0 0 5.053 2.526 2.526 0 0 0 0-5.053"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.75 4.55A2.75 2.75 0 0 0 1 7.3v11.5a2.75 2.75 0 0 0 2.75 2.75h9.228a6.027 6.027 0 0 1 8.523-8.522V7.301a2.75 2.75 0 0 0-2.751-2.75z"
      />
    </svg>
  );
};
export default JobSearch;
