import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

export function useUserID(): string {
  const [userID, setUserID] = useState();
  useEffect(() => {
    return async function () {
      const user = await Auth.currentUserInfo();
      setUserID(user.id);
    };
  }, []);
  console.log(userID);
  return userID;
}
