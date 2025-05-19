import React from "react";
const SchoolBus: React.FC<
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
        d="M6.001 22.5v-3h2v3zm10 0v-3h2v3zM21.5 11V8h2v3zM.5 11V8h2v3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.504 1.5a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-17a1 1 0 0 0-1-1zm1 4.75v6.5h5.5v-6.5zm13 6.5h-5.5v-6.5h5.5zm-11.5 4.75h2v-2h-2zm8 0h2v-2h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SchoolBus;
