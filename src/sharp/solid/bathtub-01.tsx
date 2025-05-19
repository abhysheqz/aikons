import React from "react";
const Bathtub_01: React.FC<
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
        d="m4.106 20.856 1-2 1.789.894-1 2zm14 .894-1-2 1.788-.894 1 2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21 11.25v4a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-4z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 12.25H2v-2h20z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.523 4.25C5.683 4.25 5 4.932 5 5.773v5.477H3V5.773a3.523 3.523 0 0 1 6.902-.998l.057.192-1.918.566-.057-.191.96-.284-.96.284a1.52 1.52 0 0 0-1.46-1.092"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m11.125 5.03-2.5 2-1.25-1.56 2.5-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bathtub_01;
