import React from "react";
const CopyLink: React.FC<
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
        d="M19.261 4.739a1.67 1.67 0 0 0-2.36 0 1 1 0 1 1-1.414-1.414 3.669 3.669 0 1 1 5.188 5.188l-2.359 2.36a3.67 3.67 0 0 1-4.988.186 1 1 0 1 1 1.306-1.515 1.67 1.67 0 0 0 2.268-.086l2.36-2.359a1.67 1.67 0 0 0 0-2.36m-3.395 3.217a1.67 1.67 0 0 0-2.268.086l-2.36 2.359a1.67 1.67 0 0 0 2.361 2.36 1 1 0 0 1 1.415 1.414 3.67 3.67 0 0 1-5.19-5.188l2.36-2.36a3.67 3.67 0 0 1 4.988-.186 1 1 0 0 1-1.306 1.515"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.175 4.2a.975.975 0 0 0-.975.975v13.65c0 .538.437.975.975.975h13.65a.975.975 0 0 0 .975-.975v-5.362a.975.975 0 0 1 1.95 0v5.362a2.925 2.925 0 0 1-2.925 2.925H5.175a2.925 2.925 0 0 1-2.925-2.925V5.175A2.925 2.925 0 0 1 5.175 2.25h5.363a.975.975 0 1 1 0 1.95z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CopyLink;
