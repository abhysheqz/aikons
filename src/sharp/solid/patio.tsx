import React from "react";
const Patio: React.FC<
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
        d="M12 1.25c-3.728 0-6.75 3.03-6.75 6.767v6.233H3.689L2 15.376l.832 1.248 1.311-.874h15.714l1.31.874.833-1.248-1.689-1.126H18.75V8.017c0-3.737-3.022-6.767-6.75-6.767m4.821 13V8.017H7.18v6.233zM8.808 4.394a4.85 4.85 0 0 0-1.228 1.69h2.491zm7.612 1.69H13.93l1.263-1.69a4.85 4.85 0 0 1 1.228 1.69M12 3.183c.526 0 1.033.084 1.507.24L12 5.44l-1.507-2.015c.474-.156.98-.24 1.507-.24M22 22.75H2v-1.5h20z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.25 22.75h3.5v-8.5h-3.5zM8.75 14.25H5a.75.75 0 0 0-.75.75v7c0 .414.336.75.75.75h3.75zM15.25 14.25v8.5H19a.75.75 0 0 0 .75-.75v-7a.75.75 0 0 0-.75-.75z"
      />
    </svg>
  );
};
export default Patio;
