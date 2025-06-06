import React from "react";
const Viber: React.FC<
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
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M21 10.5c0 6.5-3 8-9 8q-.515 0-1-.015L7.698 21.5H7.5v-3.474c-3-.834-4.5-2.93-4.5-7.526 0-6.5 3-8 9-8s9 1.5 9 8Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12.774 13.862c.771.42 1.466.69 1.915.843.324.11.675.013.917-.229l.644-.644-1.735-1.157a.49.49 0 0 0-.615.061zm0 0a10.4 10.4 0 0 1-2.383-1.753 10.4 10.4 0 0 1-1.753-2.383m0 0c-.42-.771-.69-1.466-.843-1.915a.89.89 0 0 1 .229-.917l.644-.644 1.157 1.735a.49.49 0 0 1-.061.615zm-.315-2.442.69 1.379m6.203 5.514-1.378-.69"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={0.8}
        d="M14 9.5a1 1 0 0 0-1-1M15.5 9.5A2.5 2.5 0 0 0 13 7M17 9.5a4 4 0 0 0-4-4"
      />
    </svg>
  );
};
export default Viber;
