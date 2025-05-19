import React from "react";
const CongruentToCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M8.4 9.94c.308-.637.763-.893 1.215-.934.484-.043 1.108.153 1.689.716q.035.034.071.063c.909.849 2.054 1.307 3.19 1.205 1.198-.108 2.243-.829 2.836-2.055a1 1 0 0 0-1.801-.87c-.308.636-.762.892-1.214.933-.484.043-1.109-.153-1.69-.716a1 1 0 0 0-.07-.063c-.91-.849-2.054-1.307-3.19-1.205-1.198.108-2.244.829-2.836 2.055a1 1 0 1 0 1.8.87m-.9 1.562a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2zM7.5 15a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CongruentToCircle;
