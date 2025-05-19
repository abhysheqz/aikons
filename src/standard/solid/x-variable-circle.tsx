import React from "react";
const XVariableCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M9.5 8.5a1 1 0 0 0 0 2h.5c.036 0 .092.012.148.045a.2.2 0 0 1 .082.079l.612 1.274-.734 1.018A1.37 1.37 0 0 1 9 13.5a1 1 0 1 0 0 2 3.37 3.37 0 0 0 2.732-1.416l.095-.133.14.29c.385.804 1.231 1.259 2.033 1.259h.5a1 1 0 1 0 0-2H14a.3.3 0 0 1-.148-.045.2.2 0 0 1-.082-.079l-.612-1.274.734-1.018A1.37 1.37 0 0 1 15 10.5a1 1 0 1 0 0-2 3.37 3.37 0 0 0-2.732 1.416l-.095.133-.14-.29C11.648 8.954 10.802 8.5 10 8.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default XVariableCircle;
