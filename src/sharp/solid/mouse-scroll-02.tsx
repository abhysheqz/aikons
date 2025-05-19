import React from "react";
const MouseScroll_02: React.FC<
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
        d="M12 1.25c-3.223 0-5.357 1.232-6.637 3.296C4.125 6.542 3.75 9.216 3.75 12c0 2.785.375 5.459 1.613 7.454C6.643 21.518 8.777 22.75 12 22.75s5.357-1.232 6.637-3.296c1.238-1.995 1.613-4.67 1.613-7.454 0-2.785-.375-5.458-1.613-7.454C17.357 2.482 15.223 1.25 12 1.25m2.968 6.164L12 5.039 9.03 7.414l.937 1.171L11.25 7.56v3.88l-1.282-1.026-.937 1.171L12 13.96l2.968-2.375-.937-1.171-1.281 1.025V7.56l1.281 1.025z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MouseScroll_02;
