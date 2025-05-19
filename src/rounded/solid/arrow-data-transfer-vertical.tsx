import React from "react";
const ArrowDataTransferVertical: React.FC<
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
        d="M16 19a1 1 0 1 1-2 0V6.74c0-.472 0-.936.056-1.294.053-.342.222-1.046 1.007-1.34.773-.291 1.424.09 1.723.293.317.216.677.542 1.046.877l.72.653c.379.343.746.676.99.969.225.27.667.882.343 1.617-.323.735-1.102.886-1.468.934-.395.051-.91.051-1.439.051H16zM8 5a1 1 0 1 1 2 0v12.26c0 .472 0 .936-.056 1.294-.053.342-.222 1.046-1.007 1.34-.774.291-1.424-.09-1.723-.293-.317-.216-.677-.543-1.046-.877l-.72-.653c-.379-.343-.746-.676-.99-.969-.225-.27-.667-.882-.343-1.617.323-.735 1.102-.886 1.468-.934.395-.051.91-.051 1.439-.051H8z"
      />
    </svg>
  );
};
export default ArrowDataTransferVertical;
