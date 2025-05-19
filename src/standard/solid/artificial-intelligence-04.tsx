import React from "react";
const ArtificialIntelligence_04: React.FC<
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
        d="M8 1.25a.75.75 0 0 1 .75.75v1.75h2.5V2a.75.75 0 0 1 1.5 0v1.75h2.5V2a.75.75 0 0 1 1.5 0v1.75h.75a2.75 2.75 0 0 1 2.75 2.75v.75H22a.75.75 0 0 1 0 1.5h-1.75v2.5H22a.75.75 0 0 1 0 1.5h-1.75v2.5H22a.75.75 0 0 1 0 1.5h-1.75v.75a2.75 2.75 0 0 1-2.75 2.75h-.75V22a.75.75 0 0 1-1.5 0v-1.75h-2.5V22a.75.75 0 0 1-1.5 0v-1.75h-2.5V22a.75.75 0 0 1-1.5 0v-1.75H6.5a2.75 2.75 0 0 1-2.75-2.75v-.75H2a.75.75 0 0 1 0-1.5h1.75v-2.5H2a.75.75 0 0 1 0-1.5h1.75v-2.5H2a.75.75 0 0 1 0-1.5h1.75V6.5A2.75 2.75 0 0 1 6.5 3.75h.75V2A.75.75 0 0 1 8 1.25m1.52 7.49a.75.75 0 0 1 .702-.49h.556a.75.75 0 0 1 .703.49l2.223 6a.75.75 0 0 1-1.407.52l-.708-1.91H9.411l-.707 1.91a.75.75 0 1 1-1.407-.52zm1.514 3.11-.534-1.44-.533 1.44zM16 8.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArtificialIntelligence_04;
