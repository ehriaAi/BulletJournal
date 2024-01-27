using API.Data.Pagination;
using API.Models.Entities;

namespace API.Data.Interfaces {
    public interface IChecklistRepository<T> {
        Task<T> AddAsync(T item);
        Task<bool> DateUsedAsync(DateOnly date, int userId);
        Task<PagedList<T>> GetListAsync(int userId, PageParams pageParams);
        Task<T> GetByIdAsync(int userId, int itemID);
    }
    public interface IChecklistRepository {
        Task<T> AddAsync<T>(T item) where T : Checklist;
        Task<bool> DateUsedAsync<T>(DateOnly date, int userId) where T : Checklist;
        Task<PagedList<T>> GetListAsync<T>(int userId, PageParams pageParams) where T : Checklist;
        Task<T> GetByIdAsync<T>(int userId, int itemID) where T : Checklist;
    }
}