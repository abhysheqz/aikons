import React from "react";
const Versus: React.FC<
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
        d="M16.53 3.152a1 1 0 0 1 .318 1.378l-10 16a1 1 0 0 1-1.696-1.06l10-16a1 1 0 0 1 1.378-.318M2.553 3.106a1 1 0 0 1 1.341.447L7 9.763l3.105-6.21a1 1 0 0 1 1.79.894l-4 8a1 1 0 0 1-1.79 0l-4-8a1 1 0 0 1 .448-1.341M15 11a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h3v2h-3v-.5a1 1 0 0 0-2 0v.5a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-3v-2h3v.5a1 1 0 0 0 2 0V13a2 2 0 0 0-2-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Versus;
