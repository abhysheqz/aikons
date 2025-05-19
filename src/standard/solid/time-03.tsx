import React from "react";
const Time_03: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm12.207 5.543a1 1 0 0 0-1.414 0L12 10.586 9.707 8.293a1 1 0 0 0-1.414 1.414L10.586 12l-.293.293a1 1 0 1 0 1.414 1.414l.293-.293.293.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Time_03;
