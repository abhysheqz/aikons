import React from "react";
const BookOpen_02: React.FC<
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
        d="M18.354 1.839a.75.75 0 0 1 .396.66v1.18l3.033-.914a.75.75 0 0 1 .967.717v15.546l-10.393 3.115a.8.8 0 0 1-.292.087l-.065.02-.065-.02a.8.8 0 0 1-.292-.087L1.25 19.028V3.482a.75.75 0 0 1 .967-.717l9.661 2.912 5.706-3.801a.75.75 0 0 1 .77-.037M12.75 6.897v12.987l4.5-3.747V3.9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BookOpen_02;
