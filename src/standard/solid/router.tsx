import React from "react";
const Router: React.FC<
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
        d="M1.25 14.125A2.75 2.75 0 0 1 4 11.375h16a2.75 2.75 0 0 1 2.75 2.75v6a2.75 2.75 0 0 1-2.75 2.75H4a2.75 2.75 0 0 1-2.75-2.75zm11.75 3a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1m3.99 0a1 1 0 0 1 1-1H18a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1m-11.49-1a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zM7.277 3.386c1.327-1.39 3.174-2.261 5.223-2.261s3.896.871 5.223 2.261a1 1 0 0 1-1.446 1.381C15.3 3.746 13.966 3.125 12.5 3.125s-2.8.62-3.777 1.642a1 1 0 0 1-1.446-1.38m2.25 2.356A4.1 4.1 0 0 1 12.5 4.457c1.17 0 2.222.498 2.973 1.285a1 1 0 0 1-1.446 1.381c-.4-.419-.94-.666-1.527-.666s-1.127.247-1.527.666a1 1 0 0 1-1.446-1.381M11.5 9.125a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Router;
