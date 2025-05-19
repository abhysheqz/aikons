import React from "react";
const Toilet_01: React.FC<
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
        d="M3 3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3h1a1 1 0 1 1 0 2H9v2h11a1 1 0 0 1 1 1c0 .886-.165 1.733-.465 2.513-.343.815-.838 1.41-1.427 1.837-.929.674-2.18.993-3.66.993-.484 0-1.326-.088-2.166-.244-.868-.16-1.59-.367-1.906-.55a.75.75 0 1 0-.751 1.298c.565.327 1.521.568 2.383.727.89.165 1.83.27 2.44.27q.592 0 1.166-.063c-.028.37.028.824.204 1.324.311.881.915 1.643 1.629 2A1 1 0 0 1 18 23H4a1 1 0 0 1-.707-1.707c.736-.736 2.419-3.558 1.455-7.309A2 2 0 0 1 3 12zm4 3a1 1 0 0 0 0 2v4H5V3h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Toilet_01;
