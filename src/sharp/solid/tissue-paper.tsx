import React from "react";
const TissuePaper: React.FC<
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
        d="M18.82 3.25H6c-1.428 0-2.638.808-3.455 1.945S1.25 7.858 1.25 9.5s.477 3.167 1.295 4.305C3.362 14.943 4.572 15.75 6 15.75a3.8 3.8 0 0 0 1.702-.407c-.505 1.528-.95 3.156-.95 4.657v.75h13.5V20c0-1.378.396-2.956.898-4.574.152-.493.317-.994.48-1.492.355-1.084.704-2.15.916-3.072A8.4 8.4 0 0 0 22.752 9c0-1.501-.386-2.896-1.05-3.938-.657-1.034-1.658-1.812-2.882-1.812M3.15 9.5c0-1.28.374-2.398.931-3.174C4.64 5.549 5.33 5.173 6 5.173c.67 0 1.36.376 1.919 1.153.557.776.931 1.895.931 3.174 0 1.28-.374 2.398-.931 3.174-.558.777-1.248 1.153-1.919 1.153-.67 0-1.36-.376-1.919-1.153-.557-.776-.931-1.895-.931-3.174"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.01 9.5c0 .552-.446 1-.996 1h-.008a1 1 0 0 1-.996-1c0-.552.446-1 .996-1h.008c.55 0 .996.448.996 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TissuePaper;
