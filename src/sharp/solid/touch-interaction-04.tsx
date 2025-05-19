import React from "react";
const TouchInteraction_04: React.FC<
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
        d="M7.583 14.125a1.396 1.396 0 0 0-2.035.109 1.29 1.29 0 0 0-.026 1.614l.012.016 4.26 6.886h9.305c1.479 0 2.651-1.132 2.651-2.497v-6.27c0-.567-.489-1.05-1.123-1.05H19.41v1.506h-.808v-1.421a1 1 0 0 0-.062-.346c-.15-.403-.563-.704-1.061-.704l-1.216.002v1.936h-.808v-1.853a1 1 0 0 0-.062-.346c-.15-.403-.563-.704-1.061-.704h-1.216v1.938h-.808V5.509a1.258 1.258 0 1 0-2.516 0v10.935z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 8H3V2h18v6h-5"
      />
    </svg>
  );
};
export default TouchInteraction_04;
