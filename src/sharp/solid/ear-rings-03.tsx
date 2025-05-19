import React from "react";
const EarRings_03: React.FC<
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
        d="M6.075 3.52a.75.75 0 0 0-1.106-.05l-1 1 1.06 1.06.42-.419.949 1.139H3v1.5h3.398l-.95 1.139-.419-.42L3.97 9.53l1 1a.75.75 0 0 0 1.106-.05L8.35 7.75H13v-1.5H8.35z"
      />
      <path
        fill="currentColor"
        d="M12.25 7a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0M2.25 17a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0"
      />
      <path
        fill="currentColor"
        d="M17.925 13.52a.75.75 0 0 1 1.106-.05l1 1-1.06 1.06-.42-.419-.949 1.139H21v1.5h-3.398l.95 1.139.419-.42 1.06 1.061-1 1a.75.75 0 0 1-1.106-.05l-2.275-2.73H11v-1.5h4.65z"
      />
    </svg>
  );
};
export default EarRings_03;
