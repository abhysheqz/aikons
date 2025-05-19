import React from "react";
const Hold_03: React.FC<
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
        d="M12.878 1.75c-.76 0-1.357.588-1.357 1.288v7.282h-.795V5.279c0-.7-.596-1.289-1.356-1.289s-1.357.588-1.357 1.289v9.85l-2.57-2.47c-.666-.64-1.765-.58-2.351.123a1.45 1.45 0 0 0-.03 1.834l.004.006 5.73 7.628h8.311c2.288 0 4.143-1.83 4.143-4.089V7.52c0-.7-.596-1.288-1.357-1.288-.76 0-1.356.588-1.356 1.288v2.8h-.795V5.28c0-.7-.596-1.289-1.357-1.289-.76 0-1.356.588-1.356 1.289v5.04h-.795V3.04c0-.701-.596-1.289-1.356-1.289"
      />
    </svg>
  );
};
export default Hold_03;
