import React from "react";
const GoBackwardSec_10: React.FC<
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
        d="M11.806 3.207q.098-.002.194-.002a8.795 8.795 0 1 1-5.277 1.758L5.55 3.4a10.74 10.74 0 0 0-4.3 8.6c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12 17.937 1.25 12 1.25q-1.105.002-2.149.215a.977.977 0 0 0-.6 1.526l1.954 2.736 1.59-1.136z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.446 8.106A1 1 0 0 1 9.999 9v8h-2v-6l-.4.3-1.2-1.6 2-1.5a1 1 0 0 1 1.047-.094M12.999 10v5h1.5v-5zm-1-2h3.5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-3.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GoBackwardSec_10;
