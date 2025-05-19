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
        d="M14.25 7A3.75 3.75 0 0 1 18 3.25a.75.75 0 0 1 .75.75v4.056c0 .59.188 1.144.498 1.764.477.953.58 2.137.587 3.208a32 32 0 0 1-.046 1.726q-.029.585-.038 1.071l1.92 3.84a.75.75 0 0 1-.49 1.063l-8 2a.75.75 0 0 1-.805-.312l-.91-1.366-3.863-2.414A.75.75 0 0 1 8 17.25h5c.69 0 1.25-.56 1.25-1.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.004 3C6.444 3 5.995 3.455 6 4.01l.009.98-2 .02L4 4.026A3 3 0 0 1 7.004 1h5.992A3 3 0 0 1 16 4v12c0 1.659-1.347 3-3.004 3H7.004A3 3 0 0 1 4 15.973l.01-.982 1.999.018-.009.982A1 1 0 0 0 7.004 17h5.992c.556 0 1.004-.45 1.004-1V4c0-.55-.448-1-1.004-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 15a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.345 6.426H5.99a1.088 1.088 0 0 0 0-2.176H3.345a1.088 1.088 0 0 0 0 2.176M6.891 7.358H3.338a1.088 1.088 0 0 0 0 2.176h3.553a1.088 1.088 0 1 0 0-2.176M5.989 10.466H3.338a1.088 1.088 0 1 0 0 2.176h2.65a1.088 1.088 0 0 0 0-2.176M3.345 13.574h2.14a1.088 1.088 0 0 1 0 2.176h-2.14a1.088 1.088 0 1 1 0-2.176"
      />
    </svg>
  );
};
export default HoldPhone;
