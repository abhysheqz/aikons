import React from "react";
const TropicalStorm: React.FC<
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
        strokeWidth={1.5}
        d="M12.039 15a3.01 3.01 0 0 0 3.015-3c0-1.657-1.35-3-3.015-3a3.01 3.01 0 0 0-3.015 3c0 1.657 1.35 3 3.015 3Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5.227 12.12c.256-7.645 9.266-8.81 14.499-7.81.088.017.107.132.032.18l-3.522 2.246c1.593 1.814 2.55 2.837 2.65 5.104-.129 7.78-9.638 8.886-14.51 7.814-.087-.019-.103-.13-.029-.178l3.53-2.251c-1.592-1.815-2.55-2.837-2.65-5.104Z"
      />
    </svg>
  );
};
export default TropicalStorm;
