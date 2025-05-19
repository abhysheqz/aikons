import React from "react";
const BitcoinUp_02: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.978 9c-3.582 0-6.485 2.91-6.485 6.5S8.396 22 11.978 22c3.58 0 6.484-2.91 6.484-6.5S15.559 9 11.978 9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10.419 18.167v-5.334m1.558 0V11.5m0 8v-1.333M10.42 15.5h3.117m0 0c.517 0 .936.448.936 1v.667c0 .552-.42 1-.936 1H9.484m4.052-2.667c.517 0 .936-.448.936-1v-.667c0-.552-.42-1-.936-1H9.484"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m19.931 2-5.417 4.983c-.019.017-.042.021-.06.004-.153-.143-.773-.926-.807-.961L11.542 3.55a.1.1 0 0 0-.132-.018L4 8.538M19.93 2h-4.22m4.22 0h.07l-.042 3.755"
      />
    </svg>
  );
};
export default BitcoinUp_02;
