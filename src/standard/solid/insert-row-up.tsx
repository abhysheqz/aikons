import React from "react";
const InsertRowUp: React.FC<
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
        d="M12.707 2.043a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 1.414 1.414L11 5.164v5.586a1 1 0 1 0 2 0V5.164l1.293 1.293a1 1 0 1 0 1.414-1.414zM5.5 1.75h4.318L7.409 4.159A2.25 2.25 0 0 0 9.75 7.872v2.878a2.25 2.25 0 0 0 4.5 0V7.872a2.25 2.25 0 0 0 2.341-3.713L14.182 1.75H18.5a3.75 3.75 0 0 1 3.75 3.75v8.75H1.75V5.5A3.75 3.75 0 0 1 5.5 1.75M1.75 18.5v-2.75h6v6.5H5.5a3.75 3.75 0 0 1-3.75-3.75m7.5-2.75v6.5h5.5v-6.5zm9.25 6.5h-2.25v-6.5h6v2.75a3.75 3.75 0 0 1-3.75 3.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default InsertRowUp;
