import React from "react";
const CallDisabled_02: React.FC<
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
        d="M21.707 2.293a1 1 0 0 0-1.414 0l-18 18a1 1 0 1 0 1.414 1.414l18-18a1 1 0 0 0 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.266 12.198q-.265-.525-.55-1.174a.99.99 0 0 1 .102-.977L9.66 7.47a1 1 0 0 0 .1-.989L8.255 3.094A1 1 0 0 0 7.34 2.5H3.487A.98.98 0 0 0 2.5 3.503q.194 7.037 3.137 11.325zM7.24 16.76 9.7 14.3c.76.759 1.734 1.303 3.276 1.984.32.142.692.102.977-.102l2.579-1.842a1 1 0 0 1 .988-.1l3.386 1.505a1 1 0 0 1 .594.915v3.852a.98.98 0 0 1-1.003.988q-8.757-.24-13.257-4.74"
      />
    </svg>
  );
};
export default CallDisabled_02;
