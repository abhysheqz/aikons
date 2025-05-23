import React from "react";
const SdCard: React.FC<
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
        d="M14.555 1.25c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v6.111c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153h-1.974c-1.427 0-2.558 0-3.46-.095-.923-.098-1.692-.303-2.357-.772a4.8 4.8 0 0 1-1.148-1.148c-.469-.665-.674-1.434-.772-2.357-.095-.901-.095-2.032-.095-3.46v-.38c0-.482 0-.815.058-1.142a3.8 3.8 0 0 1 .4-1.138c.158-.291.366-.551.667-.927l.04-.05c.354-.443.473-.596.56-.757a2.3 2.3 0 0 0 .24-.683c.032-.18.035-.374.035-.942v-.954c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117zM17 5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m-3 1a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zM9 5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SdCard;
