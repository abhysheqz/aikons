import React from "react";
const PoundSend: React.FC<
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
        d="M8.5 5C6.72 5 5.1 6.64 5.1 8.889c0 2.25 1.619 3.889 3.4 3.889h1.57v2H7.675c-.473 1.132-1.046 2.26-1.724 3.257q-.341.503-.728.965h6.795l.128-.01c.117-.013.285-.038.477-.088.395-.102.828-.293 1.156-.633l1.44 1.388c-.672.697-1.489 1.024-2.094 1.181-.307.08-.577.12-.773.14-.098.01-.29.02-.35.022H2.501a1 1 0 0 1-.461-1.888c.797-.413 1.559-1.175 2.258-2.202.44-.645.837-1.37 1.192-2.132H2.5v-2h1.945A6.23 6.23 0 0 1 3.1 8.888C3.1 5.739 5.421 3 8.5 3s5.4 2.738 5.4 5.889h-2C11.9 6.639 10.281 5 8.5 5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m18.672 12-.793-.793 1.414-1.414L22.5 13l-3.207 3.207-1.414-1.414.793-.793h-5.086v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PoundSend;
