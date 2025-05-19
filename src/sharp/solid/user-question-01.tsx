import React from "react";
const UserQuestion_01: React.FC<
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
        d="M14.242 13.212A4 4 0 0 0 14 14.597v1.653h2.542a3.96 3.96 0 0 0-.542 2v2.5H2.75V20a7.75 7.75 0 0 1 5.995-7.55A5.252 5.252 0 0 1 10.5 2.25a5.25 5.25 0 0 1 1.755 10.2 7.7 7.7 0 0 1 1.987.762"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.25 13.75c-.63 0-1 .453-1 .846V15h-2v-.404c0-1.645 1.42-2.846 3-2.846s3 1.2 3 2.846c0 .584-.186 1.124-.497 1.57l-.023.033-1.318 1.599a.7.7 0 0 0-.162.452v.18h-2v-.18c0-.629.219-1.238.619-1.724l1.262-1.53a.73.73 0 0 0 .119-.4c0-.393-.37-.846-1-.846m-1.01 6h2.01v2h-2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserQuestion_01;
