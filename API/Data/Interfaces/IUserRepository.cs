using API.Models.Entities;

namespace API.Data.Interfaces {
    public interface IUserRepository {
        Task<AppUser> GetAppUserAsync(string email);
        Task<IEnumerable<AppUser>> GetAppUsersAsync();
        Task<bool> EmailExists(string email);
        Task<bool> RegisterUser(AppUser user);
    }
}