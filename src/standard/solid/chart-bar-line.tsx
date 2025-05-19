import React from "react";
const ChartBarLine: React.FC<
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
        d="M4 14a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1M12 8a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1M22 22a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1M20 12a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 4a3 3 0 1 1 5.977.37l2.94 1.47a3 3 0 1 1-.895 1.789l-2.94-1.47A3 3 0 0 1 12 7a3 3 0 0 1-1.663-.503L6.863 9.103a3 3 0 1 1-1.2-1.6l3.474-2.606A3 3 0 0 1 9 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChartBarLine;
