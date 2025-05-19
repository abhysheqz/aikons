import React from "react";
const Stars: React.FC<
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
        d="M12 2.25a.75.75 0 0 1 .75.75c0 2.006 1.01 4.075 2.593 5.657S18.993 11.25 21 11.25a.75.75 0 0 1 0 1.5c-2.006 0-4.075 1.01-5.657 2.593S12.75 18.993 12.75 21a.75.75 0 0 1-1.5 0c0-2.006-1.01-4.075-2.593-5.657S5.007 12.75 3 12.75a.75.75 0 0 1 0-1.5c2.006 0 4.075-1.01 5.657-2.593S11.25 5.007 11.25 3a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 1.25a.75.75 0 0 1 .75.75A2.25 2.25 0 0 0 22 4.25a.75.75 0 0 1 0 1.5A2.25 2.25 0 0 0 19.75 8a.75.75 0 0 1-1.5 0A2.25 2.25 0 0 0 16 5.75a.75.75 0 0 1 0-1.5A2.25 2.25 0 0 0 18.25 2a.75.75 0 0 1 .75-.75M4.5 16.25a.75.75 0 0 1 .75.75c0 .966.784 1.75 1.75 1.75a.75.75 0 0 1 0 1.5A1.75 1.75 0 0 0 5.25 22a.75.75 0 0 1-1.5 0A1.75 1.75 0 0 0 2 20.25a.75.75 0 0 1 0-1.5A1.75 1.75 0 0 0 3.75 17a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Stars;
