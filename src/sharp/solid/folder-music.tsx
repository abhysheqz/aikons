import React from "react";
const FolderMusic: React.FC<
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
        d="m18.647 13 1.5-.002c0 .843.54 1.5.775 1.663.228.158.564.288 1.078.288h.75v1.5H22c-.747 0-1.362-.186-1.853-.503v2.798c0 1.64-1.303 3.002-2.949 3.002s-2.949-1.361-2.949-3.002 1.304-3.002 2.95-3.002c.528 0 1.021.14 1.448.386z"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5h12.887a4.29 4.29 0 0 1-1.23-3.007c0-2.3 1.833-4.252 4.2-4.252q.099 0 .198.004V11.75l4-.004v1.251c0 .5.33.701.78.701h.665V6.244H12.39z"
      />
    </svg>
  );
};
export default FolderMusic;
