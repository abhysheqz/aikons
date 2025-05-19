import React from "react";
const WifiDisconnected_04: React.FC<
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
        d="m19.457 18.043 2.293 2.293-1.414 1.414-2.293-2.293-2.293 2.293-1.414-1.414 2.293-2.293-2.293-2.293 1.414-1.414 2.293 2.293 2.293-2.293 1.414 1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12 2.25c-4.127 0-7.86 1.696-10.536 4.427a.75.75 0 0 0-.071.965l10 13.798a.75.75 0 0 0 1.214 0l.3-.413-.692-.69 2.293-2.294-2.293-2.293 3.535-3.535 2.055 2.054 4.802-6.627a.75.75 0 0 0-.071-.965A14.7 14.7 0 0 0 12 2.25"
      />
    </svg>
  );
};
export default WifiDisconnected_04;
