import React from "react";
const TimeQuarter_02: React.FC<
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
        d="M12 5a1 1 0 0 1 1 1v5h3a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.21 1.29a.977.977 0 0 0-.555 1.875 8 8 0 0 1 1.236.478.977.977 0 1 0 .846-1.762 10 10 0 0 0-1.527-.59m4.13 2.326a.977.977 0 1 0-1.294 1.465 10 10 0 0 1 .877.878.977.977 0 1 0 1.465-1.293 12 12 0 0 0-1.049-1.05m2.763 3.613a.977.977 0 0 0-1.759.853q.3.62.492 1.264a.977.977 0 0 0 1.874-.555 10 10 0 0 0-.607-1.562M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12a.977.977 0 1 0-1.955 0A8.795 8.795 0 1 1 12 3.205a.977.977 0 1 0 0-1.955"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TimeQuarter_02;
