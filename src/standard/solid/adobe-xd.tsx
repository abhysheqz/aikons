import React from "react";
const AdobeXd: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM5.55 7.9a.75.75 0 0 1 1.05.15l2.4 3.2 2.4-3.2a.75.75 0 0 1 1.2.9L9.938 12.5l2.662 3.55a.75.75 0 1 1-1.2.9L9 13.75l-2.4 3.2a.75.75 0 1 1-1.2-.9l2.663-3.55L5.4 8.95a.75.75 0 0 1 .15-1.05M18 7.75a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75h-1.5a3.25 3.25 0 0 1 0-6.5h.75V8.5a.75.75 0 0 1 .75-.75m-.75 4.5h-.75a1.75 1.75 0 1 0 0 3.5h.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AdobeXd;
