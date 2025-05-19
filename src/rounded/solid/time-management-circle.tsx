import React from "react";
const TimeManagementCircle: React.FC<
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
        d="M1.25 19.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M16.25 19.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.949 13.754C5.886 13.116 7.214 13 8.773 13h6.454c1.56 0 2.887.116 3.824.754 1.047.712 1.357 1.872 1.447 3.178a1 1 0 0 1-1.996.136c-.078-1.147-.32-1.487-.576-1.661-.365-.249-1.09-.407-2.699-.407H8.773c-1.609 0-2.334.158-2.699.407-.256.174-.498.514-.576 1.661a1 1 0 1 1-1.996-.136c.09-1.306.4-2.466 1.447-3.178M12 1.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m1.832 4.305a1 1 0 0 0-1.664-1.11l-1 1.5a1 1 0 1 0 1.664 1.11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TimeManagementCircle;
