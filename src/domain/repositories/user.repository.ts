import User from "@/domain/entities/user.entity";

import ApiResponse from "@/core/types/api-response.type";
import LoginResponse from "@/core/types/login-response.type";

export default interface IUserRepository {
  register(user: User): Promise<ApiResponse>;
  login(username: string, password: string): Promise<LoginResponse>;
  sendConfirmEmail(email: string): Promise<ApiResponse>;
  verifyConfirmCode(code: string): Promise<ApiResponse>;
  sendResetPasswordEmail(email: string): Promise<ApiResponse>;
  verifyResetPasswordCode(code: string): Promise<ApiResponse>;
  resetPassword(newPassword: string): Promise<ApiResponse>;
}
