import React from "react";
const BabyGirlDress: React.FC<
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
        d="M7.296 2a2.75 2.75 0 0 0-2.224 1.132L2.335 6.895a1.75 1.75 0 0 0 .565 2.56l3.41 1.893-2.104 3.936c-.497.93-.454 2.154.36 2.986 4.316 4.411 11.322 4.213 15.438-.004.812-.83.849-2.05.354-2.974l-2.112-3.945 3.408-1.893a1.75 1.75 0 0 0 .565-2.559l-2.736-3.763A2.75 2.75 0 0 0 17.259 2h-1.982a.75.75 0 0 0-.75.75v.5a2.25 2.25 0 1 1-4.5 0v-.5a.75.75 0 0 0-.75-.75zm4.831 9.192q.08.037.15.077.07-.04.15-.077a2 2 0 0 1 1.732.011c.892.42 1.303 1.42 1.04 2.395-.267.986-1.172 1.863-2.702 2.367a.7.7 0 0 1-.44 0c-1.53-.504-2.434-1.38-2.7-2.367-.264-.975.147-1.974 1.039-2.395a2 2 0 0 1 1.731-.011"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BabyGirlDress;
