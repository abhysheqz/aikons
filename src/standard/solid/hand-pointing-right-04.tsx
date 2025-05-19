import React from "react";
const HandPointingRight_04: React.FC<
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
        d="M9.408 3.25c-.74 0-1.464.22-2.08.63L3.42 6.485a3.75 3.75 0 0 0-1.67 3.12V17a3.75 3.75 0 0 0 3.75 3.75h6a2.25 2.25 0 0 0 2.25-2.25v-.333H11a.45.45 0 1 1 0-.9h2.893c.522-.412.857-1.05.857-1.767v-.772h-3.105a.45.45 0 1 1 0-.9h3.672a2.24 2.24 0 0 0 .433-1.328s.016-.457 0-.75c-.01-.19-.043-.485-.043-.485H12.58a.45.45 0 0 1 0-.9h8.387a1.281 1.281 0 0 0 0-2.563H10a.45.45 0 1 1 0-.9h4.963l-2.554-2.554A3.75 3.75 0 0 0 9.757 3.25z"
      />
    </svg>
  );
};
export default HandPointingRight_04;
