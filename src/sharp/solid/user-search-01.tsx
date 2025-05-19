import React from "react";
const UserSearch_01: React.FC<
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
        d="M12.61 17.11a4 4 0 1 1 7.446 2.031l1.694 1.695-1.414 1.414-1.694-1.695a4 4 0 0 1-6.032-3.446m4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.742 12.711a5.25 5.25 0 0 0-2.382 4.398c0 1.178.387 2.265 1.042 3.141H2.25v-.75a7.75 7.75 0 0 1 5.995-7.55A5.252 5.252 0 0 1 10 1.75a5.25 5.25 0 0 1 1.755 10.2 7.7 7.7 0 0 1 1.986.761"
      />
    </svg>
  );
};
export default UserSearch_01;
