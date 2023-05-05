import {
  type CustomTokenPayload,
  type LoginResponse,
  type UserCredentials,
} from "./types/types";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import decodeToken from "jwt-decode";
import { useAppDispatch } from "../../store/hooks";
import { loginUserActionCreator } from "../../store/features/usersSlice/usersSlice";
import { type User } from "../../store/features/usersSlice/types/types";
import endpoints from "../../utils/endpoints/endpoints";

const urlApi = "https://bikemeet.onrender.com";

const useUsers = () => {
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    const response = await axios.post<LoginResponse>(
      `${urlApi}${endpoints.users}${endpoints.login}`,
      userCredentials
    );

    const { token } = response.data;

    const tokenPayload: CustomTokenPayload = decodeToken(token);

    const { id, email } = tokenPayload;

    const userLogin: User = { email, id, token };

    await AsyncStorage.setItem("token", token);

    dispatch(loginUserActionCreator(userLogin));
  };

  return { loginUser };
};

export default useUsers;
