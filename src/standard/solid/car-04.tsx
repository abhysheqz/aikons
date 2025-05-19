import React from "react";
const Car_04: React.FC<
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
        d="M6.828 3.125c-.775 0-1.597.3-2.156.975-2.145 2.592-2.63 5.883-2.669 8.635C1.408 13.814 1 15.245 1 17.125a1 1 0 0 0 1 1h.333a3.8 3.8 0 1 1 7.334 0h4.666a3.805 3.805 0 0 1 3.667-4.8 3.8 3.8 0 0 1 3.667 4.8H22a1 1 0 0 0 1-1c0-2.44-.357-4.192-.667-5.25-.302-1.03-1.088-1.733-1.95-2.102l-2.128-.913c-.56-1.16-1.487-2.217-2.398-3.074a20.4 20.4 0 0 0-2.867-2.229 2.8 2.8 0 0 0-1.521-.432zm1.3 4.414c.262-1.109.876-1.936 1.302-2.414h2.039c.181 0 .332.045.445.118a18.4 18.4 0 0 1 2.573 2q.359.338.682.687c-2.68-.542-5.286-.498-7.041-.391M8 9.625a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18 14.625a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M6 14.625a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
      />
    </svg>
  );
};
export default Car_04;
