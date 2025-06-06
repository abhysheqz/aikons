import React from "react";
const NuclearPower: React.FC<
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
        d="M9.25 13a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m13.988 16.757.357.628 2.495 4.48a.75.75 0 0 0 .892.347h.002l.001-.001.004-.002.01-.003.028-.01.09-.035q.112-.044.301-.133c.25-.12.59-.307.976-.579.773-.544 1.729-1.432 2.496-2.815a8.75 8.75 0 0 0 1.09-3.644c.033-.48.018-.876-.006-1.158a5 5 0 0 0-.055-.43l-.006-.03-.002-.009v-.004l-.001-.002a.75.75 0 0 0-.733-.597l-4.931-.01h-.754q.007.124.007.25a4.25 4.25 0 0 1-2.26 3.757M7.757 12.75h-.752l-4.933.01a.75.75 0 0 0-.733.597v.002l-.001.004-.002.01-.006.029q-.007.036-.015.096-.02.121-.04.334c-.024.282-.039.678-.006 1.158.066.96.324 2.262 1.09 3.644.767 1.383 1.723 2.27 2.496 2.815.386.272.726.458.976.579a5 5 0 0 0 .392.168l.028.01.01.003.003.002h.003a.75.75 0 0 0 .892-.346l2.495-4.48.357-.628a4.25 4.25 0 0 1-2.254-4.007M8.31 2.591c.84-.424 2.07-.841 3.647-.841s2.826.417 3.683.838c.429.21.761.422.99.585a5 5 0 0 1 .342.265l.022.02.008.006.003.003v.001l.002.001a.75.75 0 0 1 .145.923l-2.539 4.474-.002.004-.31.556A4.23 4.23 0 0 0 12 8.75a4.23 4.23 0 0 0-2.35.708l-.339-.58-.01-.017-2.458-4.478a.75.75 0 0 1 .136-.9v-.001l.002-.002.003-.002.007-.007.022-.02q.027-.026.073-.065a5 5 0 0 1 .259-.205c.222-.164.545-.378.965-.59"
      />
    </svg>
  );
};
export default NuclearPower;
