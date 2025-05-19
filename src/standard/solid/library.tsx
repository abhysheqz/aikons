import React from "react";
const Library: React.FC<
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
        d="M17.48 1.777c1.244-.197 2.357.697 2.535 1.919l2.21 15.164c.177 1.216-.622 2.4-1.858 2.595l-4.848.769c-1.244.197-2.356-.697-2.534-1.919l-2.21-15.164c-.178-1.216.622-2.4 1.858-2.596zM16.5 18a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H17.5a1 1 0 0 1-1-1m1.84-10.381a.75.75 0 1 0-.261-1.478l-4.795.847a.75.75 0 1 0 .26 1.477z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.75 5A2.25 2.25 0 0 1 4 2.75h5A2.25 2.25 0 0 1 11.25 5v15A2.25 2.25 0 0 1 9 22.25H4A2.25 2.25 0 0 1 1.75 20zM5.5 18a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H6.5a1 1 0 0 1-1-1M3.992 6.75a.75.75 0 1 0 0 1.5h5.015a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Library;
