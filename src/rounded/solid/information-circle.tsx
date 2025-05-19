import React from "react";
const InformationCircle: React.FC<
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
        d="M1.25 12c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12 17.937 1.25 12 1.25 1.25 6.063 1.25 12m10.432-.973c.247.034.589.122.879.412s.379.632.412.88c.027.204.027.442.027.642V17a1 1 0 1 1-2 0v-4a1 1 0 1 1 0-2h.04c.2 0 .437 0 .642.027M11.995 7A1 1 0 0 0 11 8c0 .552.446 1 .995 1h.01c.55 0 .995-.448.995-1s-.446-1-.996-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default InformationCircle;
