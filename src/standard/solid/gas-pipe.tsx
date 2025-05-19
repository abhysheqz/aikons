import React from "react";
const GasPipe: React.FC<
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
        d="M12 1.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5m2.03 4.78a.75.75 0 0 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 1.06 1.06zM7.25 17c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v4A1.75 1.75 0 0 1 15 22.75H9A1.75 1.75 0 0 1 7.25 21z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.5 11.25a.75.75 0 0 0-.75.75v1.75h4.5V12a.75.75 0 0 0-.75-.75zM5.76 16.75H2a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3.76a3 3 0 0 1-.01-.25v-4a3 3 0 0 1 .01-.25M18.24 21.25q.01-.123.01-.25v-4q0-.127-.01-.25H22a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75z"
      />
    </svg>
  );
};
export default GasPipe;
