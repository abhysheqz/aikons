import React from "react";
const UserQuestion_02: React.FC<
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
        d="M7.745 12.95A7.75 7.75 0 0 0 1.75 20.5c0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75 7.75 7.75 0 0 0-5.995-7.55A5.252 5.252 0 0 0 9.5 2.75a5.25 5.25 0 0 0-1.755 10.2M19.25 9c-.63 0-1 .453-1 .846a1 1 0 0 1-2 0C16.25 8.2 17.67 7 19.25 7s3 1.2 3 2.846c0 .584-.186 1.124-.497 1.57-.306.44-.755.817-1.036 1.053q-.11.09-.178.152c-.284.258-.289.34-.289.418a1 1 0 0 1-2 0c0-.944.538-1.53.945-1.9.156-.14.285-.25.396-.343.227-.191.379-.32.522-.524a.74.74 0 0 0 .137-.426c0-.393-.37-.846-1-.846M18.24 16a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1"
      />
    </svg>
  );
};
export default UserQuestion_02;
