import React from "react";
const ArrowDataTransferHorizontal: React.FC<
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
        d="M19 8a1 1 0 1 1 0 2H6.74c-.472 0-.936 0-1.294-.056-.342-.053-1.046-.222-1.34-1.007-.291-.774.09-1.424.293-1.723.216-.317.542-.677.877-1.046l.653-.72c.343-.379.676-.746.969-.99.27-.225.882-.667 1.617-.343.735.323.886 1.102.934 1.468.051.395.051.91.051 1.439V8zM5 16a1 1 0 1 1 0-2h12.26c.472 0 .936 0 1.294.056.342.053 1.046.222 1.34 1.007.291.773-.09 1.424-.293 1.723-.216.317-.543.677-.877 1.046l-.653.72c-.343.379-.676.746-.969.99-.27.225-.882.667-1.617.343-.735-.323-.886-1.102-.934-1.468-.051-.395-.051-.91-.051-1.439V16z"
      />
    </svg>
  );
};
export default ArrowDataTransferHorizontal;
