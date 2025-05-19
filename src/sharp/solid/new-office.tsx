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
        d="M5.992 12.448a.75.75 0 0 1 1.016 0l1.023.942 1.377-.054a.75.75 0 0 1 .773.65l.188 1.397 1.095.862c.3.236.375.66.173.985l-.74 1.193.294 1.38a.75.75 0 0 1-.502.87l-1.315.428-.645 1.244a.75.75 0 0 1-.953.348l-1.276-.53-1.275.53a.75.75 0 0 1-.954-.348l-.645-1.244-1.315-.428a.75.75 0 0 1-.502-.87l.295-1.38-.741-1.193a.75.75 0 0 1 .173-.985l1.096-.862.188-1.397a.75.75 0 0 1 .772-.65l1.378.054z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 5h2v2H5zm4 0h2v2H9zM5 8h2v2H5zm4 0h2v2H9z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.227 1.25a.977.977 0 0 0-.977.977v8.796h1.955V3.205h9.772v18.568c0 .54.438.977.977.977h7.819a.977.977 0 0 0 .977-.977V8.09a.977.977 0 0 0-.977-.977h-6.841V2.227a.977.977 0 0 0-.978-.977zm16.773 9h-2v1.5h2zm0 4h-2v1.5h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NewOffice;
