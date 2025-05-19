import React from "react";
const FullScreen: React.FC<
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
        d="M8.326 2H8.5a1 1 0 1 1 0 2c-1.468 0-1.98.01-2.37.13a3 3 0 0 0-2 2C4.01 6.52 4 7.031 4 8.5a1 1 0 1 1-2 0v-.174C2 7.1 2 6.261 2.215 5.55A5 5 0 0 1 5.55 2.215C6.26 2 7.099 2 8.326 2m9.545 2.13C17.48 4.01 16.968 4 15.5 4a1 1 0 1 1 0-2h.174c1.227 0 2.065 0 2.777.215a5 5 0 0 1 3.334 3.334C22 6.26 22 7.099 22 8.326V8.5a1 1 0 1 1-2 0c0-1.468-.01-1.98-.13-2.37a3 3 0 0 0-2-2M3 14.5a1 1 0 0 1 1 1c0 1.468.01 1.98.13 2.37a3 3 0 0 0 2 2c.39.12.902.13 2.37.13a1 1 0 1 1 0 2h-.174c-1.227 0-2.065 0-2.777-.215a5 5 0 0 1-3.334-3.334C2 17.74 2 16.902 2 15.674V15.5a1 1 0 0 1 1-1m18 0a1 1 0 0 1 1 1v.174c0 1.227 0 2.065-.215 2.778a5 5 0 0 1-3.334 3.333c-.712.216-1.55.216-2.777.215H15.5a1 1 0 1 1 0-2c1.468 0 1.98-.01 2.37-.13a3 3 0 0 0 2-2c.12-.39.13-.902.13-2.37a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FullScreen;
