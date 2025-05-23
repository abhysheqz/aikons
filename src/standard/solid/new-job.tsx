import React from "react";
const NewJob: React.FC<
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
        d="M7.082 2.45A2 2 0 0 1 9.005 1h4.491a2 2 0 0 1 1.923 1.45l.793 2.775-1.923.55L13.496 3H9.005l-.793 2.775-1.923-.55zM16.742 12.448a.75.75 0 0 1 1.016 0l1.023.942 1.377-.054a.75.75 0 0 1 .772.65l.189 1.397 1.095.862c.3.236.375.66.173.985l-.74 1.193.294 1.38a.75.75 0 0 1-.502.87l-1.315.428-.645 1.244a.75.75 0 0 1-.953.348l-1.276-.53-1.275.53a.75.75 0 0 1-.953-.348l-.646-1.244-1.315-.428a.75.75 0 0 1-.502-.87l.295-1.38-.741-1.193a.75.75 0 0 1 .173-.985l1.096-.862.188-1.397a.75.75 0 0 1 .772-.65l1.377.054z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.75 5.25A2.75 2.75 0 0 0 1 8v11a2.75 2.75 0 0 0 2.75 2.75h8.18a2.25 2.25 0 0 1-.838-2.26l.169-.789-.423-.68a2.25 2.25 0 0 1 .52-2.955l.618-.486.107-.795a2.25 2.25 0 0 1 2.318-1.948l.758.03.566-.522a2.25 2.25 0 0 1 3.05 0l.566.522.758-.03a2.24 2.24 0 0 1 1.401.421V8a2.75 2.75 0 0 0-2.75-2.75z"
      />
    </svg>
  );
};
export default NewJob;
