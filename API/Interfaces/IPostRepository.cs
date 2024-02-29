using API.DTOs;
using API.Entities;

namespace API.Interfaces;

public interface IPostRepository
{
    Task<IEnumerable<Post>> GetPostsAsync();

    Task<Post> GetPostId(int id);

    Task<bool> SaveAllChangesAsync();

    void Update(Post post);
    Task<IEnumerable<PostSendDto>> GetPostsDtoAsync();

    Task<PostSendDto> GetPostDtoId(int id);

    Task<bool> CreatePost(PostDto post);
}