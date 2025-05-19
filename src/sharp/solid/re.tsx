import React from "react";
const Re: React.FC<
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
      <path fill="currentColor" d="M12.75 14.75a1 1 0 1 1 2 0z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm15.76 11h-1.51v1.5h1.51zm-.001 3.5H17.25v1.5h1.509zM6.75 12.25h3.75v1.5H8.25v4.75h-1.5zm9.5 4h-3.5a1 1 0 0 0 1.714.7L15.536 18a2.5 2.5 0 0 1-4.286-1.75v-1.5a2.5 2.5 0 0 1 5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Re;
