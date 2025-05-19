import React from "react";
const Subpoena: React.FC<
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
        d="M7.42 5.757 5.767 3h12.468l-1.655 2.757a.5.5 0 0 1-.428.243H7.849a.5.5 0 0 1-.428-.243M5 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zm7.207 8.293c.238.237.33.565.28.872l.057.034c.582.34 1.36.837 1.89 1.367s1.027 1.308 1.367 1.89l.034.058a.999.999 0 0 1 .872 1.693l-2.5 2.5a1 1 0 0 1-1.693-.872l-.058-.034a14 14 0 0 1-1.12-.723l-2.629 2.63a1 1 0 0 1-1.414-1.415l2.629-2.629a14 14 0 0 1-.723-1.12l-.034-.058a.999.999 0 0 1-.872-1.693l2.5-2.5a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Subpoena;
