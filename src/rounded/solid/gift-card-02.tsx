import React from "react";
const GiftCard_02: React.FC<
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
        d="M22.599 7.511c.13.969.15 2.248.152 3.739h-9.17l.835-.836a2 2 0 0 0-2.828-2.828l-.836.836V3.25h3.306c1.838 0 3.293 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87M9.252 8.421v-5.17c-1.516.002-2.747.019-3.74.152-1.172.158-2.12.49-2.87 1.238-.747.749-1.08 1.698-1.237 2.87-.13.969-.15 2.248-.153 3.739h5.172l-.836-.836a2 2 0 1 1 2.828-2.828zM6.424 12.75H1.252c.002 1.515.02 2.747.153 3.739.157 1.172.49 2.121 1.238 2.87.748.748 1.697 1.08 2.87 1.238.992.133 2.223.15 3.739.153v-5.171l-.836.835a2 2 0 1 1-2.828-2.828zM10.752 15.578v5.172h3.306c1.838 0 3.293 0 4.433-.153 1.172-.158 2.121-.49 2.87-1.238.748-.749 1.08-1.698 1.238-2.87.133-.992.15-2.224.152-3.739h-9.17l.835.836a2 2 0 0 1-2.828 2.828z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.47 8.47a.75.75 0 0 1 1.06 0L10 10.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L11.06 12l2.47 2.47a.75.75 0 1 1-1.06 1.06L10 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L8.94 12 6.47 9.53a.75.75 0 0 1 0-1.06"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GiftCard_02;
