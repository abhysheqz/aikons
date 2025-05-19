import React from "react";
const DeliveredSent: React.FC<
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
        d="M14.5 19.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M4.5 19.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 7.957v11.276c0 .414.336.75.75.75h1.28q-.03-.238-.03-.483a3.75 3.75 0 1 1 7.47.483h2.56q-.03-.238-.03-.483a3.75 3.75 0 1 1 7.47.483H22a.75.75 0 0 0 .75-.75V12.75a.75.75 0 0 0-.107-.386L19.425 7H15.25V5.75A.75.75 0 0 0 14.5 5h-3.775l.707.707-5.475 5.475-3.139-3.225zm14 4.043V8.5h3.325l2.1 3.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m5.957 2 3.707 3.707-3.707 3.707L4.543 8l1.293-1.293H1.25v-2h4.586L4.543 3.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DeliveredSent;
