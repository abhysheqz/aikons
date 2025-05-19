import React from "react";
const Headphones: React.FC<
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
        d="M19.516 11.81c.816.708 1.461 1.268 1.938 1.752.484.49.854.96 1.061 1.504.16.418.24.851.235 1.289.005.438-.075.871-.235 1.289-.207.543-.577 1.013-1.06 1.504-.478.484-1.123 1.044-1.939 1.752l-.403.35-2.863-1.431V12.89l2.863-1.431zM4.484 20.9c-.816-.708-1.461-1.268-1.938-1.752-.484-.491-.854-.96-1.061-1.504a3.5 3.5 0 0 1-.235-1.29 3.5 3.5 0 0 1 .235-1.288c.207-.543.577-1.013 1.06-1.504.478-.484 1.123-1.044 1.939-1.752l.403-.35L7.75 12.89v6.927L4.887 21.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4.75a6 6 0 0 0-6 6v3H4v-3a8 8 0 1 1 16 0v3h-2v-3a6 6 0 0 0-6-6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Headphones;
