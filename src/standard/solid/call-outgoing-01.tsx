import React from "react";
const CallOutgoing_01: React.FC<
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
        d="M12.991 3.985a1 1 0 1 0 0 2l4.33.015v2.293c0 .265.097.543.344.64a1 1 0 0 0 1.07-.226l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.07-.225c-.247.096-.344.374-.344.64V4zm-6.494-1.72a2 2 0 0 0-3.203-.52L1.861 3.176a2.88 2.88 0 0 0-.858 2.17c.444 9.244 7.859 16.659 17.103 17.102a2.88 2.88 0 0 0 2.17-.857l1.432-1.433a2 2 0 0 0-.52-3.203l-4.114-2.058a2 2 0 0 0-2.309.375L11.45 18.59a16.07 16.07 0 0 1-6.586-6.586L8.18 8.687a2 2 0 0 0 .374-2.309z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CallOutgoing_01;
