using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class PostsController : BaseApiController
{
    private readonly IPostRepository _postRepository;
    private readonly IMapper _mapper;

    public PostsController(IPostRepository postRepository, IMapper mapper)
    {
        _postRepository = postRepository;
        _mapper = mapper;
    }


    [HttpGet]
    public async Task<ActionResult<IEnumerable<PostSendDto>>> GetPosts()
    {
        // var posts = await _postRepository.GetPostsAsync();

        // var postToSend = _mapper.Map<IEnumerable<PostSendDto>>(posts);

        // return Ok(postToSend);

        var posts = await _postRepository.GetPostsDtoAsync();

        return Ok(posts);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<PostSendDto>> GetPost(int id)
    {
        // var user = await _postRepository.GetPostId(id);

        // return _mapper.Map<PostSendDto>(user);

        return await _postRepository.GetPostDtoId(id);
    }

    [HttpGet("title/{title}")]
    public async Task<ActionResult<PostSendDto>> GetPostTitle(string title)
    {
        // var user = await _postRepository.GetPostId(id);

        // return _mapper.Map<PostSendDto>(user);

        return await _postRepository.GetPostDtoTitle(title);
    }


    //[Authorize]
    [HttpPost("createPost")]
    public async Task<ActionResult<bool>> CreatePost(PostDto postDto)
    {

        var postSuccesfully = await _postRepository.CreatePost(postDto);

        await _postRepository.SaveAllChangesAsync();

        return postSuccesfully;
    }

    [HttpPut]
    public async Task<ActionResult> UpdatePost(PostUpdateDto postUpdateDto)
    {
        var post = await this._postRepository.GetPostId(postUpdateDto.Id);

        if (post == null){
            return NotFound();
        }

        _mapper.Map(postUpdateDto, post);

        if (await _postRepository.SaveAllChangesAsync()) return NoContent();

        return BadRequest("Failed to update post");
    }

    /*
    //[Authorize]
    [HttpPost("createPost")]
    public async Task<ActionResult<Post>> CreatePost(PostDto postDto)
    {
        var post = new Post
        {
            Title = postDto.Title,
            Content = postDto.Content,
            DatePublished = DateOnly.FromDateTime(DateTime.Now)
        };

        await _context.Posts.AddAsync(post);

        await _context.SaveChangesAsync();

        return post;
    }*/


}