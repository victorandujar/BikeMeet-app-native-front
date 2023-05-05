import { renderHook } from "@testing-library/react";
import { store } from "../../store/store";
import decodeToken from "jwt-decode";
import useUsers from "./useUsers";
import Wrapper from "../../mocks/Wrapper";
import {
  mockLoginUser,
  mockTokenPayload,
  mockUserCredentials,
} from "../../mocks/usersMocks";
import { loginUserActionCreator } from "../../store/features/usersSlice/usersSlice";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
}));

jest.mock("jwt-decode", () => jest.fn());

const spyDispatch = jest.spyOn(store, "dispatch");

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given a useUser hook and the loginUser function", () => {
  describe("When it is called", () => {
    test("Then it should call the dispatch with the userLogin action", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUsers(), { wrapper: Wrapper });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      await loginUser(mockUserCredentials);

      expect(spyDispatch).toHaveBeenCalledWith(
        loginUserActionCreator(mockLoginUser)
      );
    });
  });
});
