import React from "react";
const GiftCard_02: React.FC<
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
        d="M6.47 8.47a.75.75 0 0 1 1.06 0L10 10.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L11.06 12l2.47 2.47a.75.75 0 1 1-1.06 1.06L10 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L8.94 12 6.47 9.53a.75.75 0 0 1 0-1.06"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4 3.25h5.25v5.172l-.836-.836a2 2 0 1 0-2.828 2.828l.836.836H1.25V6A2.75 2.75 0 0 1 4 3.25M6.422 12.75H1.25V18A2.75 2.75 0 0 0 4 20.75h5.25v-5.172l-.836.836a2 2 0 1 1-2.828-2.828zM10.75 15.578v5.172H20A2.75 2.75 0 0 0 22.75 18v-5.25h-9.172l.836.836a2 2 0 1 1-2.828 2.828zM13.578 11.25h9.172V6A2.75 2.75 0 0 0 20 3.25h-9.25v5.172l.836-.836a2 2 0 1 1 2.828 2.828z"
      />
    </svg>
  );
};
export default GiftCard_02;
