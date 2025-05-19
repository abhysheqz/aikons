import React from "react";
const HoldPhone: React.FC<
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
        d="M4.528 1.538a.95.95 0 0 1 .68-.288h9.584c.529 0 .958.435.958.972v15.556c0 .537-.43.972-.958.972H5.209a.95.95 0 0 1-.681-.288.98.98 0 0 1-.278-.693l.026-2.917 1.917.018-.017 1.936h7.657V3.194H6.175l.018 1.936-1.917.018L4.25 2.23a.98.98 0 0 1 .278-.693"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.25 6.571a3.32 3.32 0 0 1 3.321-3.321c.651 0 1.179.528 1.179 1.179v3.627c0 .59.188 1.144.498 1.764.477.953.58 2.137.587 3.208a32 32 0 0 1-.04 1.597l-.006.13q-.029.583-.038 1.07l1.92 3.84a.75.75 0 0 1-.49 1.063l-8 2a.75.75 0 0 1-.805-.312l-.91-1.366-3.864-2.414.795-1.272h5.853zM3.345 6.426h3.31a1.088 1.088 0 0 0 0-2.176h-3.31a1.088 1.088 0 0 0 0 2.176M7.662 7.358H3.338a1.088 1.088 0 0 0 0 2.176h4.324a1.088 1.088 0 1 0 0-2.176M6.662 10.466H3.338a1.088 1.088 0 1 0 0 2.176h3.324a1.088 1.088 0 0 0 0-2.176M3.345 13.574h2.81a1.088 1.088 0 0 1 0 2.176h-2.81a1.088 1.088 0 1 1 0-2.176"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.25 14.25h1.5v1.5h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HoldPhone;
