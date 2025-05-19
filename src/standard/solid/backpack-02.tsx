import React from "react";
const Backpack_02: React.FC<
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
        d="M12 2.75A2.25 2.25 0 0 0 9.75 5a.75.75 0 0 1-1.5 0 3.75 3.75 0 1 1 7.5 0 .75.75 0 0 1-1.5 0A2.25 2.25 0 0 0 12 2.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m20.565 13.001.37 6.634A3 3 0 0 0 22.5 17v-2A2 2 0 0 0 20.565 13M3.435 13.001l-.37 6.634A3 3 0 0 1 1.5 17v-2A2 2 0 0 1 3.435 13M19.367 13.072q-.045.033-.092.064c-1.162.785-2.695 1.18-4.273 1.18H9c-1.405 0-2.928-.391-4.123-1.158a6 6 0 0 1-.24-.163l-.384 6.872v.007c-.073 1.577 1.2 2.876 2.774 2.876h9.946c1.573 0 2.847-1.3 2.774-2.876z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.25 6c0-.966.784-1.75 1.75-1.75h12.002c.966 0 1.75.784 1.75 1.75v3a4.7 4.7 0 0 1-.495 2.112v.01c-.212.289-.489.546-.821.771-.862.582-2.085.923-3.434.923H9c-1.156 0-2.39-.328-3.312-.92-.436-.28-.786-.606-1.033-.974A4.7 4.7 0 0 1 4.25 9zM12 9.001a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Backpack_02;
