import React from "react";
const StructureCheck: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 22a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1zM21 8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.995 4H9a2 2 0 0 0-2 2v.496M12 20H9a2 2 0 0 1-2-2v-.493"
      />
      <path
        fill="currentColor"
        d="M5.53 11.47a.75.75 0 0 0-1.06 1.06zm.97 2.03-.53.53a.75.75 0 0 0 1.106-.05zm3.076-2.52a.75.75 0 1 0-1.152-.96zM12.75 12A5.75 5.75 0 0 0 7 6.25v1.5A4.25 4.25 0 0 1 11.25 12zM7 6.25A5.75 5.75 0 0 0 1.25 12h1.5A4.25 4.25 0 0 1 7 7.75zM1.25 12A5.75 5.75 0 0 0 7 17.75v-1.5A4.25 4.25 0 0 1 2.75 12zM7 17.75A5.75 5.75 0 0 0 12.75 12h-1.5A4.25 4.25 0 0 1 7 16.25zm-2.53-5.22 1.5 1.5 1.06-1.06-1.5-1.5zm2.606 1.45 2.5-3-1.152-.96-2.5 3z"
      />
    </svg>
  );
};
export default StructureCheck;
