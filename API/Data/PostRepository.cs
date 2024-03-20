using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class PostRepository : IPostRepository
{
    private readonly DataContext _context;
    private readonly IMapper _mapper;

    public PostRepository(DataContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async Task<PostSendDto> GetPostDtoId(int id)
    {
        return await _context.Posts.Where(x => x.Id == id).ProjectTo<PostSendDto>(_mapper.ConfigurationProvider).SingleOrDefaultAsync();
    }

    public async Task<IEnumerable<PostSendDto>> GetPostsDtoAsync()
    {
        return await _context.Posts.ProjectTo<PostSendDto>(_mapper.ConfigurationProvider).ToListAsync();
    }

    public async Task<Post> GetPostId(int id)
    {
        return await _context.Posts.FindAsync(id);
    }

    public async Task<IEnumerable<Post>> GetPostsAsync()
    {
        return await _context.Posts.Include(p => p.Photos).ToListAsync();
    }



    public async Task<bool> SaveAllChangesAsync()
    {
        return await _context.SaveChangesAsync() > 0;
    }

    public void Update(Post post)
    {
        _context.Entry(post).State = EntityState.Modified;
    }

    public async Task<bool> CreatePost(PostDto post)
    {
        var postNew = new Post
        {
            Title = post.Title,
            Content = post.Content,
            DatePublished = DateOnly.FromDateTime(DateTime.Now),
            Photos = post.Photos
        };

        var post2 = _context.Posts.AddAsync(postNew);

        await _context.SaveChangesAsync();

        return post2.IsCompletedSuccessfully;
    }

    public async Task<PostSendDto> GetPostDtoTitle(string title)
    {
        return await _context.Posts.Where(x => x.Title.ToLower().Equals(title.ToLower())).ProjectTo<PostSendDto>(_mapper.ConfigurationProvider).SingleOrDefaultAsync();
    }
}