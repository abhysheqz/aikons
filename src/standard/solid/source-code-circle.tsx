import React from "react";
const SourceCodeCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m1.949 8.067a1 1 0 0 0-1.898-.633l-2 6a1 1 0 0 0 1.898.633zm-5.242 1.39a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L7.414 12zm8-1.414a1 1 0 1 0-1.414 1.414L16.586 12l-1.293 1.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SourceCodeCircle;
