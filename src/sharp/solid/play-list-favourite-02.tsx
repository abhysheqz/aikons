import React from "react";
const PlayListFavourite_02: React.FC<
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
        d="M1.25 2.225c0-.538.437-.975.975-.975h17.55c.539 0 .975.437.975.975v9.75H18.8V3.2H3.2v15.6H11v1.95H2.225a.975.975 0 0 1-.975-.975z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.75 15V7l6.5 4zM17.515 14.481c.185.077.347.165.484.25.137-.085.299-.173.484-.25.653-.27 1.576-.393 2.606.142 1.332.69 1.932 2.307 1.541 3.896-.399 1.625-1.794 3.204-4.375 4.138L18 22.75l-.257-.093c-2.58-.934-3.975-2.513-4.374-4.138-.39-1.589.209-3.206 1.541-3.896 1.03-.535 1.953-.412 2.606-.142"
      />
    </svg>
  );
};
export default PlayListFavourite_02;
