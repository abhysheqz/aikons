import React from "react";
const BitcoinTarget: React.FC<
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
        d="M12 1a1 1 0 0 1 1 1v.552c4.448.465 7.983 4 8.448 8.448H22a1 1 0 1 1 0 2h-.552A9.5 9.5 0 0 1 13 21.448V22a1 1 0 1 1-2 0v-.552A9.5 9.5 0 0 1 2.552 13H2a1 1 0 1 1 0-2h.552A9.5 9.5 0 0 1 11 2.552V2a1 1 0 0 1 1-1M4.566 13H5a1 1 0 1 0 0-2h-.434A7.504 7.504 0 0 1 11 4.566V5a1 1 0 1 0 2 0v-.434A7.504 7.504 0 0 1 19.434 11H19a1 1 0 1 0 0 2h.434A7.504 7.504 0 0 1 13 19.434V19a1 1 0 1 0-2 0v.434A7.504 7.504 0 0 1 4.566 13M13 8a1 1 0 1 0-2 0H9.5a1 1 0 0 0 0 2v4a1 1 0 1 0 0 2H11a1 1 0 1 0 2 0 2.5 2.5 0 0 0 2-4 2.5 2.5 0 0 0-2-4m-1.5 3v-1H13a.5.5 0 0 1 0 1zm0 2H13a.5.5 0 0 1 0 1h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinTarget;
