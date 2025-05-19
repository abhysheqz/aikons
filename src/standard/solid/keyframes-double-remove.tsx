import React from "react";
const KeyframesDoubleRemove: React.FC<
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
        d="M14.523 18.973c.335.081.702-.02.952-.301h.001l.003-.004 5.27-5.998a1.02 1.02 0 0 0 0-1.34l-5.27-5.998-.003-.003a.965.965 0 0 0-1.094-.256 1 1 0 1 1-.764-1.849 2.965 2.965 0 0 1 3.363.788l5.27 5.997q.187.214.328.451a3.02 3.02 0 0 1-.328 3.53l-5.27 5.998a2.965 2.965 0 0 1-3.363.788 1 1 0 1 1 .764-1.849 1 1 0 0 0 .141.046m-3.23-14.796a2.715 2.715 0 0 0-4.087 0L4.436 7.33c-.223.254-1.08 1.232-1.61 1.842a.199.199 0 0 0 .151.329H9a2.5 2.5 0 1 1 0 5H2.946a.2.2 0 0 0-.155.325l.027.034c.238.256 1.191 1.325 1.561 1.747l.058.065 2.77 3.152a2.715 2.715 0 0 0 4.086 0l5.27-5.998a2.77 2.77 0 0 0 0-3.65zM2 11a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default KeyframesDoubleRemove;
