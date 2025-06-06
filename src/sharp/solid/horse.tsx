import React from "react";
const Horse: React.FC<
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
        d="M20.093 3.264V1.75l-1.904 1.055a6.1 6.1 0 0 0-4.234 3.959l-.586 1.758c-1.823 1.179-3.96.905-5.46.444-1.005-.308-2.19-.255-3.141.329l-.676-.338a1.963 1.963 0 0 0-2.842 1.756v4.537h1.5v-4.537a.464.464 0 0 1 .67-.415l.25.125a3.17 3.17 0 0 0-.42 1.579v10.247h1.5v-4.712C6 16.999 6.5 15.999 6.5 15.999a9.3 9.3 0 0 0 2.04.908c1.483.432 3.56.568 6.21-.324v5.666h1.5v-6.321c.999-.673 1.582-1.763 1.777-2.737q.08-.403.083-.81c.005-.511-.084-1.01-.159-1.432-.082-.465-.157-.929-.138-1.294 0 0-.063-1.279.599-2.156.636.38 1.18.152 1.18.152l1.817 1.544 1.34-1.196zM5.75 22.25v-4.107c.444-.27.786-.579 1.038-.853q.221.105.462.21v4.75zm6.5-4.079v4.078h1.5v-4.34q-.783.183-1.5.262"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Horse;
