import React from "react";
const Treadmill_02: React.FC<
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
        d="M22.97 3.243a1 1 0 1 0-1.94-.485c-.15.6-.375.843-.597.978C20.165 3.897 19.734 4 19 4a1 1 0 0 0-.948.684l-1.898 5.693a5.5 5.5 0 0 0-.832.257l-8.535 3.39L5.78 10H6.5a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2h1.22l1.191 4.768-2.347.932a2.1 2.1 0 0 0-1.314 1.953c0 1.143.912 2.097 2.07 2.097h1.187l-.401.803a1 1 0 1 0 1.789.894l.848-1.697H17V21a1 1 0 1 0 2 0v-1.252c2.096-.071 3.75-1.825 3.75-3.946 0-2.806-2.005-5.003-4.475-5.464l1.457-4.37c.611-.056 1.208-.202 1.734-.52.781-.472 1.26-1.228 1.504-2.205M17 15a1 1 0 0 1 1-1h.009a1 1 0 0 1 0 2H18a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Treadmill_02;
