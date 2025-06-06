import React from "react";
const Haji: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m9.637 10.841-5.502 3a.75.75 0 0 0-.385.56L2.75 22.55l1.487.199.952-7.774 5.167-2.818z"
      />
      <path
        fill="currentColor"
        d="m15.358 10.841-.473.866-.062-.03c-.987 2.08-2.722 3.482-4.257 4.374-.523.304-1.017.545-1.439.73l.11-.658-1.48-.247-1.002 6a.75.75 0 0 0 .74.874h14.006a.75.75 0 0 0 .743-.85l-.566-4.246-.265.298c-.415.462-.89.958-1.372 1.394-.473.429-.99.834-1.488 1.08l-.663-1.346c.31-.153.705-.447 1.144-.845.43-.39.868-.846 1.264-1.286a30 30 0 0 0 1.111-1.312l-.165-1.237a.75.75 0 0 0-.384-.559l-.834-.455c-.567 1.5-1.504 2.714-2.386 3.612a14 14 0 0 1-1.748 1.499 12 12 0 0 1-.738.491l-.047.028-.014.008-.004.002-.002.002-.371-.652-.371-.652.006-.004.032-.019.133-.082c.118-.074.29-.188.499-.339.419-.302.982-.751 1.555-1.334.838-.852 1.666-1.96 2.123-3.286z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.843 7.046C7.262 4.07 9.482 1.25 12.5 1.25s5.238 2.82 4.657 5.796l-.42 2.156c-.4 2.05-2.164 3.548-4.237 3.548s-3.837-1.498-4.237-3.548zm1.471-.287-.002-.009h6.374l-.002.01-.42 2.155c-.268 1.37-1.435 2.335-2.765 2.335s-2.497-.965-2.764-2.335z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Haji;
