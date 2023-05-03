import { type UserState, type User } from "./types/types";
import { loginUserActionCreator, userReducer } from "./usersSlice";

const initialState: UserState = {
  email: "",
  isLogged: false,
  token: "",
  id: "",
};

describe("Given a loginUser function", () => {
  describe("When it receives a new state and the action to login", () => {
    test("Then it should return the new state and the user poperty isLogged set as true", () => {
      const user: User = {
        email: "victor@andujar.org",
        token: "asdgfsfdgdsfhgdfghdfgh",
        id: "",
      };

      const expectedUserState: UserState = {
        email: "victor@andujar.org",
        token: "asdgfsfdgdsfhgdfghdfgh",
        id: "",
        isLogged: true,
      };

      const loginAction = loginUserActionCreator(user);

      const newUserState = userReducer(initialState, loginAction);

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });
});
