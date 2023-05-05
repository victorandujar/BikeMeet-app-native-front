import {
  type CustomTokenPayload,
  type UserCredentials,
} from "../hooks/useUsers/types/types";
import { type User } from "../store/features/usersSlice/types/types";

export const mockUserCredentials: UserCredentials = {
  email: "victor@andujar.org",
  password: "12345678",
};

export const mockToken = "asdjfh3425kjlhsafkdh3k2h32";

export const mockTokenPayload: CustomTokenPayload = {
  email: "victor@andujar.org",
  id: "12345678",
};

export const mockLoginUser: User = {
  email: mockTokenPayload.email,
  id: mockTokenPayload.id,
  token: mockToken,
};
