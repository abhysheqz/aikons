import React from "react";
const GolfCart: React.FC<
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
        d="M17.31 4H18a1 1 0 1 0 0-2H2a1 1 0 0 0 0 2h1v8a1 1 0 1 0 2 0V4h10.237l2.798 10.263a1 1 0 1 0 1.93-.526z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.707 9.293a1 1 0 0 1 0 1.414l-.42.42 1.545 2.318a1 1 0 0 1-1.664 1.11l-1.323-1.985-.138.137a1 1 0 0 1-1.414-1.414l.985-.985.028-.028.987-.987a1 1 0 0 1 1.414 0M3 8a1 1 0 0 1 1-1h.734a3 3 0 0 1 2.977 2.628l.281 2.248a1 1 0 1 1-1.984.248l-.281-2.248A1 1 0 0 0 4.734 9H4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18 16.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M6 16.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
      />
      <path
        fill="currentColor"
        d="M1 13a2 2 0 0 1 2-2h4.807a2 2 0 0 1 1.873 1.297L10.693 15H14l1.188-1.588a1 1 0 0 1 .8-.401l2.005-.003a5 5 0 0 1 5.008 5V19a1 1 0 0 1-1 1h-.333q.132-.48.133-1a3.8 3.8 0 1 0-7.467 1H9.667A3.805 3.805 0 0 0 6 15.2 3.8 3.8 0 0 0 2.333 20H2a1 1 0 0 1-1-1z"
      />
    </svg>
  );
};
export default GolfCart;
