import React from "react";
const LoginCircle_01: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m5 10.756a1 1 0 0 1-1 1h-4.5v.582c0 .176 0 .392-.022.568v.003c-.016.127-.088.703-.653.977-.567.275-1.067-.027-1.176-.092l-.468-.34c-.376-.294-.89-.7-1.281-1.08a4.4 4.4 0 0 1-.556-.638C7.204 12.781 7 12.431 7 12s.203-.78.344-.986c.16-.231.36-.448.556-.638.39-.38.905-.786 1.28-1.08l.47-.34c.108-.065.608-.367 1.175-.092.565.274.637.85.653.977v.003c.022.176.022.392.022.568v.594H16a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LoginCircle_01;
