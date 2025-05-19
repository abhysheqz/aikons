import React from "react";
const FlipHorizontal: React.FC<
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
        d="M8.238 10.577a1.708 1.708 0 0 1 0 2.845l-4.43 3.012C2.682 17.201 1 16.482 1 15.012V8.987c0-1.47 1.681-2.19 2.809-1.422zM19.692 7.565c1.127-.767 2.808-.048 2.808 1.422v6.025c0 1.47-1.681 2.19-2.808 1.422l-4.43-3.012a1.708 1.708 0 0 1 0-2.845z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.75 2a1 1 0 0 1 1 1v3.5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m0 7a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m0 7.5a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0v-3.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FlipHorizontal;
