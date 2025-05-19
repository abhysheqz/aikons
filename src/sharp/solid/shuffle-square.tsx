import React from "react";
const ShuffleSquare: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm15.624 5.584-1.5-2.25-1.248.832.723 1.084H15a.75.75 0 0 0-.586.281l-1.5 1.875 1.172.938L15.36 9H18a.75.75 0 0 0 .624-1.166M9 7.5H6V9h2.64l5.774 7.218A.75.75 0 0 0 15 16.5h1.599l-.723 1.084 1.248.832 1.5-2.25A.75.75 0 0 0 18 15h-2.64L9.587 7.781A.75.75 0 0 0 9 7.5m.586 8.718 1.5-1.874-1.172-.937L8.64 15H6v1.5h3a.75.75 0 0 0 .586-.282"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShuffleSquare;
