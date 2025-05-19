import React from "react";
const Blur: React.FC<
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
        d="M12.284 1.471c-.13-.1-.23-.18-.282-.221l-.282.221c-.428.336-1.166.914-1.461 1.169a32 32 0 0 0-2.816 2.75c-2.015 2.234-4.191 5.366-4.191 8.587 0 4.822 3.912 8.773 8.75 8.773 4.837 0 8.75-3.94 8.75-8.764 0-3.225-2.175-6.36-4.19-8.596a32 32 0 0 0-2.817-2.75c-.295-.255-1.033-.833-1.461-1.169m.468 6.659 2.91-1.503-.22-.246a31 31 0 0 0-2.69-2.626zm3.885-.318a17 17 0 0 1 1.5 2.295l-5.385 2.832v-3.12zm2.593 6.735q.022-.278.022-.56c0-.832-.182-1.676-.493-2.512l-6.007 3.159v3.153zm-6.478 6.677c2.816-.292 5.162-2.208 6.082-4.802l-6.082 3.041z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Blur;
