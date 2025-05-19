import React from "react";
const CreditCardPos: React.FC<
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
        d="M15.65 2.795a2.713 2.713 0 0 0-3.837 0l-9.018 9.018a2.713 2.713 0 0 0 0 3.836l1.201 1.202L16.884 4.03z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.945 5.09 5.057 17.912l3.794 3.794a2.713 2.713 0 0 0 3.836 0l9.019-9.02a2.713 2.713 0 0 0 0-3.835zm.335 6.245a.75.75 0 0 0-1.06-1.061l-2 2a.75.75 0 1 0 1.06 1.06zm-3.946 3.945a.75.75 0 0 0-1.06-1.06l-1.098 1.097a.75.75 0 1 0 1.06 1.06z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.75 21.75a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2h-16a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CreditCardPos;
