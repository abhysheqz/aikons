import React from "react";
const MailRemove_02: React.FC<
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
        d="M8.955 1.662c1.953-.05 3.887-.05 5.84 0l.058.001c1.525.039 2.752.07 3.735.24 1.03.18 1.866.524 2.573 1.233.704.707 1.046 1.532 1.222 2.544.168.965.193 2.162.225 3.645l.001.058q.02.903.015 1.804c-.001.335-.002.503-.088.59s-.293.09-.709.099a2.5 2.5 0 0 0-1.72.731L18.8 13.915c-.2.2-.3.3-.424.3s-.224-.1-.424-.3l-1.308-1.308a2.5 2.5 0 0 0-3.536 3.536l1.308 1.308c.2.2.3.3.3.424s-.1.224-.3.424l-1.308 1.308q-.11.111-.204.231c-.117.15-.175.224-.237.255-.062.03-.14.03-.298.031-1.136.005-2.271-.007-3.413-.036l-.058-.001c-1.525-.038-2.752-.07-3.735-.24-1.03-.18-1.867-.524-2.573-1.233-.704-.707-1.046-1.532-1.222-2.544-.168-.965-.193-2.162-.225-3.645l-.001-.058a70 70 0 0 1 0-2.984l.001-.058c.032-1.483.057-2.68.225-3.645.176-1.012.518-1.837 1.222-2.544.706-.71 1.543-1.053 2.573-1.232.983-.172 2.21-.202 3.735-.24zM7.257 6.729a.75.75 0 0 0-.764 1.292L9.435 9.76c.871.515 1.623.865 2.44.865.818 0 1.569-.35 2.44-.865l2.942-1.74a.75.75 0 1 0-.764-1.29l-2.942 1.739c-.844.499-1.293.656-1.676.656s-.832-.157-1.676-.656z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.582 13.668a1 1 0 0 1 0 1.414l-2.793 2.793 2.793 2.793a1 1 0 0 1-1.414 1.414l-2.793-2.793-2.793 2.793a1 1 0 0 1-1.414-1.414l2.793-2.793-2.793-2.793a1 1 0 0 1 1.414-1.414l2.793 2.793 2.793-2.793a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailRemove_02;
