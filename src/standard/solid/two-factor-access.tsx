import React from "react";
const TwoFactorAccess: React.FC<
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
        d="M6.5 6.75a2 2 0 1 1 4 0v2h-4zm-2 2v-2a4 4 0 1 1 8 0v2h.5a2.75 2.75 0 0 1 2.75 2.75v7A2.75 2.75 0 0 1 13 21.25H4a2.75 2.75 0 0 1-2.75-2.75v-7A2.75 2.75 0 0 1 4 8.75zm6.994 3.686a.75.75 0 0 1 .07 1.058l-3.5 4A.75.75 0 0 1 6.9 17.45l-1.5-2a.75.75 0 0 1 1.2-.9l.945 1.26 2.89-3.304a.75.75 0 0 1 1.059-.07M20 21.25h-4.095A3.99 3.99 0 0 0 17 18.5v-7a3.99 3.99 0 0 0-1.095-2.75H17.5v-2a2 2 0 0 0-3.817-.838 5.2 5.2 0 0 0-.857-2.137A4 4 0 0 1 19.5 6.75v2h.5a2.75 2.75 0 0 1 2.75 2.75v7A2.75 2.75 0 0 1 20 21.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TwoFactorAccess;
