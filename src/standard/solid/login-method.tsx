import React from "react";
const LoginMethod: React.FC<
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
        d="M8 5.25v1A2.25 2.25 0 0 0 5.75 8.5V14A2.25 2.25 0 0 0 8 16.25h8A2.25 2.25 0 0 0 18.25 14V8.5A2.25 2.25 0 0 0 16 6.25v-1a4 4 0 0 0-8 0m4-2a2 2 0 0 0-2 2v1h4v-1a2 2 0 0 0-2-2m-.793 14.793a1 1 0 0 0-1.414 1.414l.793.793-.793.793a1 1 0 1 0 1.414 1.414l.793-.793.793.793a1 1 0 0 0 1.414-1.414l-.793-.793.793-.793a1 1 0 0 0-1.414-1.414l-.793.793zm5.836 0a1 1 0 0 1 1.414 0l.793.793.793-.793a1 1 0 0 1 1.414 1.414l-.793.793.793.793a1 1 0 0 1-1.414 1.414l-.793-.793-.793.793a1 1 0 0 1-1.414-1.414l.793-.793-.793-.793a1 1 0 0 1 0-1.414m-13.086 0a1 1 0 0 0-1.414 1.414l.793.793-.793.793a1 1 0 1 0 1.414 1.414l.793-.793.793.793a1 1 0 0 0 1.414-1.414l-.793-.793.793-.793a1 1 0 1 0-1.414-1.414l-.793.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LoginMethod;
