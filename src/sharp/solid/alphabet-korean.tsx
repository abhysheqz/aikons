import React from "react";
const AlphabetKorean: React.FC<
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
        d="M12.162 7H5.074V5h8.963l.096.894c.187 1.718-.08 4.556-1.324 7.29-1.257 2.762-3.542 5.474-7.411 6.764l-.648-1.896c3.222-1.073 5.131-3.314 6.212-5.688.885-1.946 1.194-3.944 1.2-5.364M15.201 3h2.025v8h2.026v2h-2.026v8h-2.025z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AlphabetKorean;
