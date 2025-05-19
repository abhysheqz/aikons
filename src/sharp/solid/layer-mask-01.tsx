import React from "react";
const LayerMask_01: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m0 20a9.2 9.2 0 0 1-5.469-1.79l2.123-2.273 4.75 3.957q-.688.105-1.403.106m6.483-2.652a9.25 9.25 0 0 1-3.289 2.086L9.68 16.088l2.613-2.8zm2.544-4.569a9.2 9.2 0 0 1-1.562 3.435l-6.149-5.273 2.34-2.506zM21.25 12q.001.14-.004.277l-4.564-3.692 2.384-2.555A9.2 9.2 0 0 1 21.251 12"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LayerMask_01;
