import React from "react";
const Mining_02: React.FC<
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
        d="M15.818 3.48a.75.75 0 0 1 .53.23l3.555 3.68a.75.75 0 0 1-.02 1.061l-4.657 4.47a.75.75 0 0 1-1.05-.01l-3.555-3.556a.75.75 0 0 1 .004-1.064l4.657-4.595a.75.75 0 0 1 .536-.216M9.75 11.09a.75.75 0 0 1 .53.22l2 2a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 0-1.06l7-7a.75.75 0 0 1 .53-.22M4.796 2.554A.75.75 0 0 1 5.52 2c2.721 0 5.207.443 7.365 1.351a.75.75 0 0 1 .203 1.256L10.811 6.6a.75.75 0 0 1-.962.022 39 39 0 0 0-4.707-3.225.75.75 0 0 1-.346-.844m14.957 7.841a.75.75 0 0 1 .549.45c.856 2.075 1.305 4.506 1.305 7.281a.75.75 0 0 1-1.389.393 49 49 0 0 0-3.33-4.766.75.75 0 0 1 .055-.993l2.132-2.156a.75.75 0 0 1 .678-.209"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mining_02;
