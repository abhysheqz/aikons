import React from "react";
const Store_03: React.FC<
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
        d="M2.5 19.5V11h2v8.5a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V11h2v8.5a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.244 16.336a1 1 0 0 1 1.412-.084c.466.414 1.302.748 2.335.748s1.869-.334 2.334-.748a1 1 0 1 1 1.328 1.496c-.902.8-2.243 1.252-3.662 1.252s-2.76-.451-3.663-1.252a1 1 0 0 1-.084-1.412"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.252 16.336a1 1 0 0 1 1.412-.084c.466.414 1.302.748 2.336.748s1.87-.334 2.336-.748a1 1 0 0 1 1.328 1.496C14.762 18.548 13.42 19 12 19s-2.761-.451-3.664-1.252a1 1 0 0 1-.084-1.412M3.25 3.5c0-.966.784-1.75 1.75-1.75h14c.966 0 1.75.784 1.75 1.75v1.3l1.901 3.328a.75.75 0 0 1 .099.372 3.75 3.75 0 0 1-6.813 2.165 4 4 0 0 1-.828.713c-.91.593-2.059.872-3.109.872s-2.199-.279-3.109-.872a4 4 0 0 1-.828-.713A3.75 3.75 0 0 1 1.25 8.5a.75.75 0 0 1 .099-.372L3.25 4.8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Store_03;
