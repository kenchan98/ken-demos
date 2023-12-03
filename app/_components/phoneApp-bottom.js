import Link from "next/link";
import Button from "./phoneApp-button";

export default function PhoneAppBottom(props) {
  const { title, linkTo } = props;
  return (
    <div className="flex fixed bottom-0 items-center justify-center h-1/6 w-full bg-gray-900">
      <Link href={linkTo}>
        <Button>{title}</Button>
      </Link>
    </div>
  );
}
