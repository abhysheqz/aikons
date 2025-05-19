import React from "react";
const Pinterest: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 4.039 2.227 7.558 5.52 9.395l4.302-10.766a1 1 0 0 1 1.857.742l-1.81 4.532q.425.096.881.097a4 4 0 1 0-3.465-2 1 1 0 1 1-1.731 1 6 6 0 1 1 3.567 2.775l-1.769 4.427c1.068.355 2.21.548 3.398.548 5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pinterest;
