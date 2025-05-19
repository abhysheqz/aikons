import React from "react";
const NewOffice: React.FC<
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
        d="M5.742 12.448a.75.75 0 0 1 1.016 0l1.023.942 1.377-.054a.75.75 0 0 1 .773.65l.188 1.397 1.095.862c.3.236.375.66.173.985l-.74 1.193.294 1.38a.75.75 0 0 1-.502.87l-1.315.428-.645 1.244a.75.75 0 0 1-.953.348l-1.276-.53-1.275.53a.75.75 0 0 1-.954-.348l-.645-1.244-1.315-.428a.75.75 0 0 1-.502-.87l.295-1.38-.741-1.193a.75.75 0 0 1 .173-.985l1.096-.862.188-1.397a.75.75 0 0 1 .772-.65l1.378.054zM4.75 6a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2h-1a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1m-4 3a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2h-1a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.75 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v17a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V10a3 3 0 0 0-3-3h-5V4a3 3 0 0 0-3-3h-7a3 3 0 0 0-3 3v6.5a1 1 0 1 0 2 0zm13.5 6.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NewOffice;
