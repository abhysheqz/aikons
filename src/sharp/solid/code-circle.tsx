import React from "react";
const CodeCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m3.5 7.5h.75V11c0 .199.079.39.22.53l.47.47-.47.47a.75.75 0 0 0-.22.53v2.25h-.75v1.5H17a.75.75 0 0 0 .75-.75v-2.69l.78-.78a.75.75 0 0 0 0-1.06l-.78-.78V8a.75.75 0 0 0-.75-.75h-1.5zM6.25 8A.75.75 0 0 1 7 7.25h1.5v1.5h-.75V11a.75.75 0 0 1-.22.53l-.47.47.47.47c.141.14.22.331.22.53v2.25h.75v1.5H7a.75.75 0 0 1-.75-.75v-2.69l-.78-.78a.75.75 0 0 1 0-1.06l.78-.78zm4.509 3.25H9.25v1.5h1.509zm3.991 0h-1.509v1.5h1.509z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CodeCircle;
