import React from "react";
const Microwave: React.FC<
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
        d="M1.25 5A2.75 2.75 0 0 1 4 2.25h16A2.75 2.75 0 0 1 22.75 5v12A2.75 2.75 0 0 1 20 19.75H4A2.75 2.75 0 0 1 1.25 17zm3 1.5c0-.69.56-1.25 1.25-1.25h10c.69 0 1.25.56 1.25 1.25v9c0 .69-.56 1.25-1.25 1.25h-10c-.69 0-1.25-.56-1.25-1.25zM20 6a1 1 0 1 0-2 0v.009a1 1 0 1 0 2 0zm0 2.996a1 1 0 1 0-2 0v.008a1 1 0 1 0 2 0zm0 2.995a1 1 0 1 0-2 0V12a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m14 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Microwave;
