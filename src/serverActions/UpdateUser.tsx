// serverActions/UpdateUser.ts
import { UserType } from '../types/UserType'; // Adjust path as per your project structure
import { User } from '../lib/model/user'; // Assuming you have a User model defined

export async function updateUserRole(userId: string, newRole: string): Promise<UserType | null> {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { role: newRole },
      { new: true }
    );

    return updatedUser;
  } catch (error) {
    console.error('Error updating user role:', error);
    throw new Error('Error updating user role');
  }
}
