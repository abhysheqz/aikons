import React from "react";
const LastFm: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.5 4.5v15a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.143 14.599A3.8 3.8 0 0 1 9.429 15C7.535 15 6 13.657 6 12s1.535-3 3.429-3c2.089.142 2.717 1.852 3.095 3 .857 2.599 2.815 3 3.762 3S18 14.328 18 13.5c0-2.178-3.429-.822-3.429-3 0-.828.768-1.5 1.715-1.5.861 0 1.574.556 1.696 1.28"
      />
    </svg>
  );
};
export default LastFm;
