import React from "react";
const JobShare: React.FC<
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
        d="M20.25 12A2.25 2.25 0 0 0 18 14.25l-2.394 1.204a2.25 2.25 0 1 0 0 3.592L18 20.243v.007a2.25 2.25 0 1 0 .894-1.796L16.5 17.257l2.394-1.211A2.25 2.25 0 1 0 20.25 12"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.082 2.45A2 2 0 0 1 9.005 1h4.491a2 2 0 0 1 1.923 1.45l.793 2.775-1.923.55L13.496 3H9.005l-.793 2.775-1.923-.55z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.75 4.5A2.75 2.75 0 0 0 1 7.25v11.5a2.75 2.75 0 0 0 2.75 2.75h10.77l-.27-.5a3.75 3.75 0 1 1 1.38-7.237l1.002-.504a3.75 3.75 0 0 1 4.868-2.546V7.25a2.75 2.75 0 0 0-2.75-2.75z"
      />
    </svg>
  );
};
export default JobShare;
