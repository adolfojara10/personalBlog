using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class PostsController : BaseApiController
{
    private readonly DataContext _context;

    public PostsController(DataContext context)
    {
        _context = context;
    }


    [HttpGet]
    public async Task<ActionResult<IEnumerable<Post>>> GetPosts()
    {
        return await _context.Posts.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Post>> GetPost(int id)
    {
        return await _context.Posts.FindAsync(id);
    }

    //[Authorize]
    [HttpPost("createPost")]
    public async Task<ActionResult<Post>> CreatePost(PostDto postDto)
    {
        var post = new Post
        {
            Title = postDto.Title,
            Content = postDto.Content,
            DatePublished = DateTime.Now.Date
        };

        await _context.Posts.AddAsync(post);

        await _context.SaveChangesAsync();

        return post;
    }


}