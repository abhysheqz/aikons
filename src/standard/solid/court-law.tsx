import React from "react";
const CourtLaw: React.FC<
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
        d="M13.577 2.188a2.75 2.75 0 0 0-3.154 0L2.63 7.642a2.75 2.75 0 0 0-1.123 2.773L3.45 20.52a2.75 2.75 0 0 0 2.7 2.23h11.697a2.75 2.75 0 0 0 2.7-2.23l1.944-10.105a2.75 2.75 0 0 0-1.124-2.773zm-.87 7.105a1 1 0 0 0-1.414 0l-2.5 2.5a1 1 0 0 0 0 1.414l1.293 1.293-2.293 2.293a1 1 0 1 0 1.414 1.414l2.293-2.293 1.293 1.293a1 1 0 0 0 1.415 0l2.5-2.5a1 1 0 0 0 0-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CourtLaw;
