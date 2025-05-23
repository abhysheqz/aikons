import React from "react";
const HandPointingLeft_04: React.FC<
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
        d="M12.355 14H10.5A1.5 1.5 0 0 1 9 12.5V11m4 6h-1.5a1.5 1.5 0 0 1-1.5-1.5v-1.267M9 11h2.421M9 11H4a1.5 1.5 0 0 1 0-3h5m2 9.324V18.5a1.5 1.5 0 0 0 1.5 1.5h6a3 3 0 0 0 3-3V9.606a3 3 0 0 0-1.336-2.497l-3.908-2.605A3 3 0 0 0 14.592 4h-.35a3 3 0 0 0-2.12.879L9 8m5 0H9"
      />
    </svg>
  );
};
export default HandPointingLeft_04;
