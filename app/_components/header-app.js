import { useRouter } from "next/navigation";

export default function PhoneAppHeader(props) {
  const router = useRouter();
  const {
    title,
    onClickBackButton = () => {
      router.back();
    },
  } = props;
  return (
    <div className="h-14 flex-none sticky top-0 w-full text-white bg-gray-900">
      <div
        className="absolute top-0 left-0 text-blue-600 m-4 "
        onClick={onClickBackButton}
      >
        BACK
      </div>
      <h1 className="flex m-2 justify-center text-2xl ">{title}</h1>
    </div>
  );
}
