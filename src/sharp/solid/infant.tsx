import React from "react";
const Infant: React.FC<
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
        d="M10.25 13.25h3.5V14a1.75 1.75 0 1 1-3.5 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m16.169 16.676.296.261A6.74 6.74 0 0 1 18.75 22v.75H5.25V22c0-2.017.885-3.827 2.285-5.063l.296-.261L12 17.726z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25a8.75 8.75 0 0 0-8.309 6H3.5a2.25 2.25 0 0 0-.075 4.499 8.753 8.753 0 0 0 17.15 0A2.25 2.25 0 0 0 20.5 7.25h-.191a8.75 8.75 0 0 0-8.304-6M4.978 8.187A7.25 7.25 0 0 1 12 2.75c.612 0 1.25.584 1.25 1.25 0 .665-.638 1.25-1.25 1.25-.34 0-.758-.133-1.05-.351l-.602-.449-.897 1.203.601.448c.556.415 1.29.649 1.949.649 1.389 0 2.75-1.206 2.75-2.75a2.6 2.6 0 0 0-.112-.755c2.15.84 3.8 2.677 4.383 4.942l.145.563H20.5a.75.75 0 0 1 0 1.5h-1.224l-.082.657a7.251 7.251 0 0 1-14.388 0l-.082-.657H3.5a.75.75 0 0 1 0-1.5h1.333z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 9a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1M15 9a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Infant;
