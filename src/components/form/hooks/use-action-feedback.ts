import { useEffect, useRef } from "react";
import { ActionState } from "../utils/to-action-state";

type onArgs = {
  actionState: ActionState;
};

interface UseActionFeedbackOptions {
  onSuccess?: (onArgs: onArgs) => void;
  onError?: (onArgs: onArgs) => void;
}

const useActionFeedback = (
  actionState: ActionState,
  options: UseActionFeedbackOptions
) => {
  const prevTimestamp = useRef(actionState.timeStamp);
  const isUpdate = prevTimestamp.current !== actionState.timeStamp;

  useEffect(() => {
    if (isUpdate) return;

    if (actionState.status === "SUCCESS") {
      //   console.log(actionState.message);
      options.onSuccess?.({ actionState });
    }

    if (actionState.status === "ERROR") {
      //   console.error(actionState.message);
      options.onError?.({ actionState });
    }

    prevTimestamp.current = actionState.timeStamp;
  }, [isUpdate, actionState, options]);
};

export { useActionFeedback };
