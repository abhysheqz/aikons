import React from "react";
const TruckReturn: React.FC<
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
      <circle cx={17} cy={18} r={2.5} fill="currentColor" />
      <circle cx={7} cy={18} r={2.5} fill="currentColor" />
      <path
        fill="currentColor"
        d="M13.25 3.75a.5.5 0 0 0-.5-.5H3A1.75 1.75 0 0 0 1.25 5l.002 12c0 .967.783 1.75 1.75 1.75h.272a3.8 3.8 0 1 1 7.452 0h2.548a3.8 3.8 0 1 1 7.452 0h.276a1.75 1.75 0 0 0 1.75-1.75v-5.25H20a.75.75 0 0 1 0-1.5h2.426l-2.198-3.665a2.75 2.75 0 0 0-2.359-1.335H15.25a.5.5 0 0 0-.5.5V10A1.75 1.75 0 0 1 13 11.75h-2.25V13a.75.75 0 0 1-1.28.53l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.28.53v1.25H13a.25.25 0 0 0 .25-.25z"
      />
    </svg>
  );
};
export default TruckReturn;
