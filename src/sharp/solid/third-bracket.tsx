import React from "react";
const ThirdBracket: React.FC<
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
        d="M18.75 4.25H17v-2.5h3c.69 0 1.25.56 1.25 1.25v6.583l1.25 1.667a1.25 1.25 0 0 1 0 1.5l-1.25 1.667V21c0 .69-.56 1.25-1.25 1.25h-3v-2.5h1.75v-6.167L19.938 12l-1.188-1.583zM2.75 3c0-.69.56-1.25 1.25-1.25h3v2.5H5.25v6.167L4.063 12l1.187 1.583v6.167H7v2.5H4c-.69 0-1.25-.56-1.25-1.25v-6.583L1.5 12.75a1.25 1.25 0 0 1 0-1.5l1.25-1.667z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ThirdBracket;
