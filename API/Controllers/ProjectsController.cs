using System.Security.Claims;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class ProjectsController : BaseApiController
{
    private readonly IProjectRepository _projectRepository;
    private readonly IMapper _mapper;

    public ProjectsController(IProjectRepository projectRepository, IMapper mapper)
    {
        _projectRepository = projectRepository;
        _mapper = mapper;
    }


    [HttpGet]
    public async Task<ActionResult<IEnumerable<ProjectSendDto>>> GetProjects()
    {
        // var posts = await _postRepository.GetPostsAsync();

        // var postToSend = _mapper.Map<IEnumerable<PostSendDto>>(posts);

        // return Ok(postToSend);

        var posts = await _projectRepository.GetProjectsDtoAsync();

        return Ok(posts);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ProjectSendDto>> GetProject(int id)
    {
        // var user = await _postRepository.GetPostId(id);

        // return _mapper.Map<PostSendDto>(user);

        return await _projectRepository.GetProjectDtoId(id);
    }

    [HttpGet("title/{title}")]
    public async Task<ActionResult<ProjectSendDto>> GetProjectTitle(string title)
    {
        // var user = await _postRepository.GetPostId(id);

        // return _mapper.Map<PostSendDto>(user);

        return await _projectRepository.GetProjectDtoTitle(title);
    }


    //[Authorize]
    [HttpPost("createProject")]
    public async Task<ActionResult<bool>> CreateProject(ProjectDto projectDto)
    {

        var postSuccesfully = await _projectRepository.CreateProject(projectDto);

        await _projectRepository.SaveAllChangesAsync();

        return postSuccesfully;
    }

    [HttpPut]
    public async Task<ActionResult> UpdateProject(ProjectUpdateDto projectUpdateDto)
    {
        var project = await this._projectRepository.GetProjectId(projectUpdateDto.Id);

        if (project == null){
            return NotFound();
        }

        _mapper.Map(projectUpdateDto, project);

        if (await _projectRepository.SaveAllChangesAsync()) return NoContent();

        return BadRequest("Failed to update project");
    }



}