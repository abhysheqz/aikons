import React from "react";
const Acute: React.FC<
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
        d="M13.836 1.014a1 1 0 0 1 1.092.615l1 2.5a1 1 0 1 1-1.857.742l-.258-.647-4.692 7.677c2.51.918 4.379 3.046 4.379 6.08q0 .52-.072 1.019h5.158l-.293-.293a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l.293-.293H3a1 1 0 0 1-.853-1.521l9.858-16.133-.84.14a1 1 0 1 1-.33-1.972z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Acute;
