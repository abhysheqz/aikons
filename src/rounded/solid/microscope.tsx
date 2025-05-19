import React from "react";
const Microscope: React.FC<
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
        d="M3.25 21.25a1 1 0 0 1 1-1h15.5a1 1 0 1 1 0 2H4.25a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M13 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 14a5.5 5.5 0 0 1 5.5-5.5h1a1 1 0 1 1 0 2h-1a3.5 3.5 0 1 0 0 7h.5a1 1 0 1 1 0 2h-.5A5.5 5.5 0 0 1 4 14m7.5 4.5a1 1 0 0 1 1-1H18a1 1 0 1 1 0 2h-5.5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.56 17.446c.239-.714.966-1.196 1.72-1.196a1.75 1.75 0 0 1 1.66 1.196l1.271 3.817a.75.75 0 0 1-.711.987H9a.75.75 0 0 1-.712-.987z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.866 13.726a1 1 0 0 1-.364 1.366l-2.198 1.272a1 1 0 1 1-1.002-1.731L17.5 13.36a1 1 0 0 1 1.366.365"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.386 3.398a3.284 3.284 0 0 0-4.492-1.206A3.297 3.297 0 0 0 8.69 6.69l.196.34a3.25 3.25 0 1 1 3.193 5.535q.14.235.27.421c.193.274.415.526.725.706.345.2.738.305 1.137.305.358 0 .677-.107.98-.248.288-.133.677-.358 1.064-.582s.72-.417.979-.6c.273-.193.525-.416.704-.726.199-.346.304-.738.304-1.138 0-.357-.107-.676-.247-.98-.133-.289-.325-.622-.549-1.01z"
      />
    </svg>
  );
};
export default Microscope;
