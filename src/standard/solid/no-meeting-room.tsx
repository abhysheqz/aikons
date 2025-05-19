import React from "react";
const NoMeetingRoom: React.FC<
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
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.705 2.293A3 3 0 0 0 2 5v16a1 1 0 0 0 1 1h17.999a1 1 0 0 0 1-1v-.412zM20 16.467V8a1 1 0 0 0-1-1h-1v7.467L5.533 2H15a3 3 0 0 1 3 3h1a3 3 0 0 1 3 3v10.467z"
      />
    </svg>
  );
};
export default NoMeetingRoom;
