using API.Entities;

namespace API.Interfaces;

public interface IUserRepository
{
    Task<IEnumerable<User>> GetUsersAsync();

    Task<bool> SaveAllChangesAsync();

    Task<User> GetUserIdAsync(int id);

    void Update(User user);

}