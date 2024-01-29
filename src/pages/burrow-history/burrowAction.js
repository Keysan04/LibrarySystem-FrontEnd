import { toast } from "react-toastify";
import { postBorrow } from "../../helpers/axiosHelper";

export const postBurrowAction = (obj) => async (dispatch) => {
  const pending = postBorrow(obj);
  toast.promise(pending, {
    pending: "Please Wait...",
  });
  const { status, message } = await pending;
  toast[status](message);
};
