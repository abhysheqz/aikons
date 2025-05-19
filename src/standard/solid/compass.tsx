import React from "react";
const Compass: React.FC<
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
        d="M12.75 2v2h-1.5V2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 2M12 3.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 3.25 12 3.25m3.716 6.474a.75.75 0 0 0-.94-.94l-8 2.5a.75.75 0 0 0-.04 1.418l3.682 1.38 1.38 3.681a.75.75 0 0 0 1.418-.04z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Compass;
