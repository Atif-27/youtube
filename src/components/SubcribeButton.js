import { useDispatch, useSelector } from "react-redux";
import { subscribe, unsubscribe } from "../utils/userActionSlice";

const SubcribeButton = ({ id }) => {
  const dispatch = useDispatch();
  const subscriptionList = useSelector(
    (store) => store.userAction.subscription
  );
  function onSubscribe() {
    dispatch(subscribe(id));
  }
  function onUnSubscribe() {
    dispatch(unsubscribe(id));
  }
  const isSubscribed = subscriptionList.includes(id);
  return (
    <>
      {!isSubscribed ? (
        <button
          onClick={onSubscribe}
          className="px-3 py-2 bg-red-600 text-white rounded-sm "
        >
          Subscribe
        </button>
      ) : (
        <button
          onClick={onUnSubscribe}
          className="px-3 py-2 bg-black text-white rounded-sm "
        >
          Unsubscribe
        </button>
      )}
    </>
  );
};
export default SubcribeButton;
