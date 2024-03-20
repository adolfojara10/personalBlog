using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class ProjectRepository : IProjectRepository
{
    private readonly DataContext _context;
    private readonly IMapper _mapper;

    public ProjectRepository(DataContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async Task<ProjectSendDto> GetProjectDtoId(int id)
    {
        return await _context.Projects.Where(x => x.Id == id).ProjectTo<ProjectSendDto>(_mapper.ConfigurationProvider).SingleOrDefaultAsync();
    }

    public async Task<IEnumerable<ProjectSendDto>> GetProjectsDtoAsync()
    {
        return await _context.Projects.ProjectTo<ProjectSendDto>(_mapper.ConfigurationProvider).ToListAsync();
    }

    public async Task<Project> GetProjectId(int id)
    {
        return await _context.Projects.FindAsync(id);
    }

    public async Task<IEnumerable<Project>> GetProjectsAsync()
    {
        return await _context.Projects.Include(p => p.Photos).ToListAsync();
    }



    public async Task<bool> SaveAllChangesAsync()
    {
        return await _context.SaveChangesAsync() > 0;
    }

    public void Update(Project project)
    {
        _context.Entry(project).State = EntityState.Modified;
    }

    public async Task<bool> CreateProject(ProjectDto project)
    {
        var projectNew = new Project
        {
            Title = project.Title,
            Content = project.Content,
            DatePublished = DateOnly.FromDateTime(DateTime.Now),
            Photos = project.Photos
        };

        var project2 = _context.Projects.AddAsync(projectNew);

        await _context.SaveChangesAsync();

        return project2.IsCompletedSuccessfully;
    }

    public async Task<ProjectSendDto> GetProjectDtoTitle(string title)
    {
        return await _context.Projects.Where(x => x.Title.ToLower().Equals(title.ToLower())).ProjectTo<ProjectSendDto>(_mapper.ConfigurationProvider).SingleOrDefaultAsync();
    }

}