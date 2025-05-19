import React from "react";
const ChartMedium: React.FC<
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
        d="M12 3h.009M12 6h.009M12 9h.009M12 12h.009M12 15h.009M12 18h.009M6 7c.673-1.122 1.587-2 2.993-2 5.943 0 2.602 12 8.989 12 1.416 0 2.324-.884 3.018-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 21H3V3"
      />
    </svg>
  );
};
export default ChartMedium;
