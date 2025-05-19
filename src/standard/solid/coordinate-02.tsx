import React from "react";
const Coordinate_02: React.FC<
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
        d="M9.793 1.793a1 1 0 0 1 1.414 0l.793.793.793-.793a1 1 0 1 1 1.414 1.414L13 4.414V6a1 1 0 1 1-2 0V4.414L9.793 3.207a1 1 0 0 1 0-1.414M1.5 13a1 1 0 0 1 1-1h3a1 1 0 0 1 .8 1.6L4.5 16h1a1 1 0 1 1 0 2h-3a1 1 0 0 1-.8-1.6L3.5 14h-1a1 1 0 0 1-1-1M17.793 12.793a1 1 0 0 1 1.414 0l.793.793.793-.793a1 1 0 0 1 1.414 1.414l-.793.793.793.793a1 1 0 0 1-1.414 1.414L20 16.414l-.793.793a1 1 0 0 1-1.414-1.414l.793-.793-.793-.793a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 7.5a1 1 0 0 1 1 1v6.956l8.043 5.204a1 1 0 0 1-1.086 1.68L12 17.19 4.043 22.34a1 1 0 0 1-1.086-1.68L11 15.456V8.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Coordinate_02;
