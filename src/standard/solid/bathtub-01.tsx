import React from "react";
const Bathtub_01: React.FC<
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
        d="M6.523 4C5.683 4 5 4.682 5 5.523V11h17a1 1 0 1 1 0 2v3a5 5 0 0 1-2.347 4.239l.054.054a1 1 0 0 1-1.414 1.414l-.738-.738Q17.282 21 17 21H7q-.282 0-.555-.03l-.738.737a1 1 0 0 1-1.414-1.414l.054-.054A5 5 0 0 1 2 16v-3a1 1 0 1 1 0-2h1V5.523A3.523 3.523 0 0 1 9.45 3.56l.425-.34a1 1 0 0 1 1.25 1.56l-2.5 2a1 1 0 1 1-1.25-1.56l.5-.4A1.52 1.52 0 0 0 6.523 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bathtub_01;
