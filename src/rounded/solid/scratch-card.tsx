import React from "react";
const ScratchCard: React.FC<
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
        d="M15.056 3.25c1.602 0 2.881 0 3.884.135 1.037.14 1.89.435 2.565 1.11s.97 1.528 1.11 2.565q.013.093.024.19H11.5a.75.75 0 0 0-.624 1.166l1 1.5a.75.75 0 0 0 .624.334h10.25v2.805c0 1.603 0 2.882-.135 3.885-.14 1.037-.435 1.89-1.11 2.565s-1.528.97-2.565 1.11c-1.003.135-2.282.135-3.884.135H8.944c-1.602 0-2.881 0-3.884-.135-1.037-.14-1.89-.435-2.565-1.11s-.97-1.528-1.11-2.565c-.135-1.003-.135-2.282-.135-3.884v-2.112c0-1.602 0-2.881.135-3.884.14-1.037.435-1.89 1.11-2.565s1.528-.97 2.565-1.11c1.003-.135 2.282-.135 3.884-.135zm-7.556 5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ScratchCard;
