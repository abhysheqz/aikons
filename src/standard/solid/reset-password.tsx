import React from "react";
const ResetPassword: React.FC<
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
        d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12a.976.976 0 0 0-1.953 0 8.298 8.298 0 1 1-1.446-4.683l-.781-.175a.976.976 0 1 0-.426 1.906l2.953.659a.976.976 0 0 0 1.178-.808l.464-3.1a.976.976 0 1 0-1.93-.289l-.061.404A10.24 10.24 0 0 0 12 1.75m2.5 7.5v1c.966 0 1.75.784 1.75 1.75v3.5a1.75 1.75 0 0 1-1.75 1.75h-5a1.75 1.75 0 0 1-1.75-1.75V12c0-.966.784-1.75 1.75-1.75v-1a2.5 2.5 0 0 1 5 0m-2.5-1a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ResetPassword;
